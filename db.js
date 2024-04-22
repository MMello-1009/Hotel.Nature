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
            liga = `SELECT * FROM utilizadores WHERE Email='`+email+`' AND Id_tipo = 3`;
        }
        const result = await request.query(liga);
        res.json(result.recordset);
        console.log(result.recordset);
        
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Erro a obter dados' });
    }
});

app.post('/register', async (req, res) => {
    const { Email, Pass, nif, Telemovel, NomeCli } = req.query;
    console.log(req.query);
    try {
        
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

app.get('/editprofile/:Email', async (req, res) => {
  const { Email } = req.params;

  try {
    const query = `SELECT Nif_Cli, NomeCli, Telemovel FROM clientes WHERE Email = '${Email}'`;
    const request = new mssql.Request();
    const result = await request.query(query);

    // Verifica se encontrou o cliente com o email fornecido
    if (result.recordset.length === 0) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    // Retorna os detalhes do cliente como resposta
    res.status(200).json(result.recordset[0]);
  } catch (err) {
    console.error('Erro ao buscar perfil do cliente:', err);
    res.status(500).json({ error: 'Erro ao buscar perfil do cliente' });
  }
});

app.post('/updateprofile/:email', async (req, res) => {
  const { email } = req.params;
  const { nif, NomeCli, Telemovel } = req.body;

  try {
    // Verifique se todos os campos necessários foram fornecidos no corpo da solicitação
    if (!nif || !NomeCli || !Telemovel) {
      return res.status(400).json({ error: 'Por favor, forneça todos os campos necessários' });
    }

    // Execute a atualização no banco de dados
    const query = `
      UPDATE clientes
      SET Nif_Cli = @nif,
          NomeCli = @NomeCli,
          Telemovel = @Telemovel
      WHERE Email = @email
    `;

    const request = new mssql.Request();
    await request.input('nif', mssql.Int, nif)
                 .input('NomeCli', mssql.NVarChar, NomeCli)
                 .input('Telemovel', mssql.NVarChar, Telemovel)
                 .input('email', mssql.NVarChar, email)
                 .query(query);

    res.status(200).json({ message: 'Perfil atualizado com sucesso' });
  } catch (err) {
    console.error('Erro ao atualizar perfil do cliente:', err);
    res.status(500).json({ error: 'Erro ao atualizar perfil do cliente' });
  }
});


 

app.get('/availability', async (req, res) => {
    const { startDate, endDate } = req.query;
    console.log('startDate:', startDate);
    console.log('endDate:', endDate);
    try {
        const pool = await mssql.connect(config);

        const query = `
        SELECT
        quartos.Id_tipo,COUNT(quartos.Id_tipo) AS Lotacao , tipo_quarto.Descricao
    FROM quartos inner join tipo_quarto on quartos.Id_tipo = tipo_quarto.Id_tipo
    WHERE quartos.Id_quarto NOT IN (
        SELECT reservas_quarto.Id_quarto
        FROM reservas_quarto
        WHERE reservas_quarto.Data_inicio > '`+startDate+`' AND reservas_quarto.Data_fim < '`+endDate+`'
    )
    group by quartos.Id_tipo, tipo_quarto.Descricao`;

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

app.get('/precos/:roomId', async (req, res) => {
    const { roomId } = req.params;
    
  
    try {
      const pool = await mssql.connect(config);
  
      const query = `SELECT preco FROM tipo_quarto WHERE Id_tipo = @roomId`;
  
      const result = await pool.request()
        .input('roomId', mssql.Int, roomId)
        .query(query);
  
      // Extract the price from the first record in the result set
      const preco = result.recordset[0].preco;
  
      console.log('preco:', preco);
  
      // Send only the price as the response
      res.json({ preco });
    } catch (error) {
      console.error('Erro ao verificar disponibilidade:', error);
      res.status(500).json({ error: 'Erro ao verificar disponibilidade' });
    }
  });

  app.post('/addreserva', async (req, res) => {
    const { email, nif, tlm, nome, precoTotal, startDate, endDate, totalPessoas, roomIds, idPensao } = req.body;

    try {
        // Inserir os dados do usuário e obter o ID da reserva
        const insertUserQuery = `
            INSERT INTO reservas (Nif_Cli, Preco, Data_inicio, Data_fim, Num_pessoas) 
            VALUES ('${nif}', '${precoTotal}', '${startDate}', '${endDate}', '${totalPessoas}');
            SELECT SCOPE_IDENTITY() as Id_reserva;
        `;
        const request = new mssql.Request();
        const userResult = await request.query(insertUserQuery);
        const reservaId = userResult.recordset[0].Id_reserva;
        
        // Inserir cada quarto individualmente na tabela reservas_quarto
        for (const [roomId, roomCount] of Object.entries(roomIds)) {
            console.log(`Quarto ID: ${roomId}, Quantidade: ${roomCount}`);
            for (let i = 0; i < roomCount; i++) {
                // Verificar a disponibilidade do quarto nesta data
                const checkAvailabilityQuery = `
                    SELECT TOP 1 Id_quarto 
                    FROM quartos 
                    WHERE Id_tipo = '${roomId}' 
                    AND Id_quarto NOT IN (
                        SELECT Id_quarto 
                        FROM reservas_quarto 
                        WHERE Data_inicio <= '${startDate}' AND Data_fim >= '${endDate}'
                    )
                `;
                console.log("Consulta de Disponibilidade:", checkAvailabilityQuery);
                const availabilityResult = await request.query(checkAvailabilityQuery);

                if (availabilityResult.recordset.length > 0) {
                    const availableRoomId = availabilityResult.recordset[0].Id_quarto;
                    console.log(`Quarto disponível encontrado. ID: ${availableRoomId}`);

                    // Inserir o quarto na tabela reservas_quarto
                    const insertRoomQuery = `
                        INSERT INTO reservas_quarto (Id_quarto, Id_reserva, Id_regime, Data_inicio, Data_fim) 
                        VALUES ('${availableRoomId}', '${reservaId}', '${idPensao}', '${startDate}', '${endDate}')
                    `;
                    console.log("Consulta de Inserção de Quarto:", insertRoomQuery);
                    await request.query(insertRoomQuery);
                } else {
                    console.warn(`Não há disponibilidade para o quarto ${roomId} nesta data.`);
                }
            }
        }

        res.status(201).json({ message: 'Reserva efetuada com sucesso' });
    } catch (err) {
        console.error('Erro ao executar a query:', err);
        res.status(500).json({ error: 'Erro ao efetuar a reserva', message: err.message });
    }
});









app.get('/pensao/:selectedPension', async (req, res) => {
    const { selectedPension } = req.params; // Usar req.params para obter o parâmetro selectedPension
    
    
    try {
        const pool = await mssql.connect(config);

        const query = `SELECT Preco FROM regime WHERE Tipo_regime = @selectedPension`; // Usar @selectedPension como parâmetro

        const result = await pool.request()
            .input('selectedPension', mssql.NVarChar, selectedPension) // Usar mssql.NVarChar para strings
            .query(query);

        const precoregime = result.recordset[0].Preco;
        console.log("preço regime: ",precoregime);

        res.json( precoregime );
    } catch (error) {
        console.error('Erro ao verificar disponibilidade:', error);
        res.status(500).json({ error: 'Erro ao verificar disponibilidade' });
    }
});







app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

