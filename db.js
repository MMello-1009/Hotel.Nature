var mssql = require('mssql');
var express = require('express');
const cors = require('cors');
var app = express();
var port = 4000;
const blobStream = require('blob-stream');

const PDFDocument = require('pdfkit')

// Set up connection to database.
var config = {
    server: "sql.bsite.net\\MSSQL2016", // Corrected hostname with escaped backslashes
    user: 'hotelnature_',
    password: 'Re@lNature#1',
    database: 'hotelnature_',
    options: {
        encrypt: true, // Enable encryption
        trustServerCertificate: true // Trust the self-signed certificate
    }
};

// Connect to database.
mssql.connect(config, function (err) {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.use(express.json()); // Middleware to parse JSON bodies

app.use(cors(
    {
        origin: '*'
    }
));

app.get('/login', async (req, res) => {
    const { email } = req.query;
    try {
        const request = new mssql.Request();
        let liga = `SELECT * FROM utilizadores`;
        if (email) {
            liga = `SELECT * FROM utilizadores WHERE Email='${email} AND Id_tipo = 3'`;
        }
        const result = await request.query(liga);
        res.json(result.recordset);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Erro a obter dados' });
    }
});

app.post('/register', async (req, res) => {
    const { Email, Pass, nif, Telemovel, NomeCli } = req.query;
    console.log(req.query);
    try {
        console.log('mostra')
        const query = `INSERT INTO utilizadores (Id_tipo, Email, Pass) VALUES (3, '${Email}', '${Pass}')`;
        const request = new mssql.Request();
        const result = await request.query(query);

        const result2 = await request.query('SELECT MAX(Id_utilizador) as MAX FROM utilizadores');

        let { MAX } = result2.recordset[0];
        console.log(MAX);

        const result3 = await request.query(`INSERT INTO clientes (Nif_Cli,Email ,Id_utilizador, NomeCli, Telemovel) VALUES (${nif},'${Email}', ${MAX}, '${NomeCli}', '${Telemovel}')`);

        res.status(201).json({ message: 'Utilizador registado com sucesso' });
    } catch (err) {
        console.error('Error executing query:', err);

        res.status(500).json({ error: 'Erro ao registar o utilizador' });
    }
});

app.get('/availability', async (req, res) => {
    const { startDate, endDate } = req.query;
    console.log('startDate:', startDate);
    console.log('endDate:', endDate);
    try {
        const pool = await mssql.connect(config);

        const query = `
            SELECT *
            FROM quartos
            WHERE Id_tipo NOT IN (
                SELECT Id_quarto
                FROM reservas_quarto
                WHERE Data_inicio <= @startDate AND Data_fim >= @endDate
            )
            AND Lotacao >= (
                SELECT COUNT(Id_quarto)
                FROM reservas_quarto
                WHERE Data_inicio <= @startDate AND Data_fim >= @endDate
                AND quartos.Id_tipo = reservas_quarto.Id_quarto
            )`;

        const result = await pool.request()
            .input('startDate', mssql.Date, startDate)
            .input('endDate', mssql.Date, endDate)
            .query(query);

        const availableRooms = result.recordset;
        console.log('availableRooms:', availableRooms);

        res.json({ availableRooms: availableRooms });
    } catch (error) {
        console.error('Erro ao verificar disponibilidade:', error);
        res.status(500).json({ error: 'Erro ao verificar disponibilidade' });
    }
});



app.post('/criar-fatura', async (req, res) => {
    try {
      const invoiceData = req.body;
      const invoiceStream = generateInvoice(invoiceData);
  
      res.setHeader('Content-Type', 'application/pdf');
  
      // Agora vamos lidar com o stream corretamente
      invoiceStream.on('data', (chunk) => {
        res.write(chunk);
      });
  
      invoiceStream.on('end', () => {
        res.end();
      });
  
      invoiceStream.on('error', (error) => {
        console.error('Erro ao gerar fatura:', error);
        res.status(500).json({ error: 'Erro ao gerar fatura' });
      });
    } catch (error) {
      console.error('Erro ao gerar fatura:', error);
      res.status(500).json({ error: 'Erro ao gerar fatura' });
    }
  });

// Função para gerar o PDF da fatura
function generateInvoice(invoice) {
    const doc = new PDFDocument();
    const stream = doc.pipe(blobStream());
  
    // Cabeçalho
    doc
      .fontSize(20)
      .text('Fatura', { align: 'center' })
      .fontSize(10)
      .text('Endereço da Empresa', { align: 'center', width: 500 })
      .text('Cidade, Estado, CEP', { align: 'center', width: 500 })
      .moveDown(2);
  
    // Informações do Cliente
    doc
      .fontSize(12)
      .text(`Cliente: ${invoice.customerName}`)
      .text(`Endereço: ${invoice.address}`)
      .text(`Email: ${invoice.email}`)
      .moveDown(1);
  
    // Lista de Itens
    doc
      .fontSize(12)
      .text('Lista de Itens:', { underline: true })
      .moveDown(0.5);
  
    invoice.items.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.name} - $${item.price}`);
    });
  
    // Subtotal
    const subtotal = invoice.items.reduce((acc, item) => acc + item.price, 0);
    doc.moveDown(1).text(`Subtotal: $${subtotal}`);
  
    // Imposto
    const taxRate = 0.23; // 23% de imposto
    const tax = subtotal * taxRate;
    doc.text(`Imposto (23%): $${tax}`);
  
    // Total
    const total = subtotal + tax;
    doc.moveDown(1).text(`Total: $${total}`, { bold: true });
  
    // Rodapé
    doc
      .fontSize(10)
      .text('Obrigado por fazer negócios conosco!', { align: 'center', width: 500 })
      .moveDown(1)
      .text('Contato: email@empresa.com', { align: 'center', width: 500 });
  
    // Finalizar o PDF
    doc.end();
  
    return stream;
  }


app.use((err, req, res, next) => {
    console.error('Erro no servidor:', err);
    res.status(500).json({ error: 'Erro interno no servidor' });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

