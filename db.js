var mssql = require('mssql');
var express = require('express');
const cors = require('cors');
var app = express();
var port = 4000;

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
    const { Email, Pass, nif, Telemovel, NomeCLi } = req.query;
    console.log(req.query);
    try {
        console.log('mostra')
        const query = `INSERT INTO utilizadores (Id_tipo, Email, Pass) VALUES (3, '${Email}', '${Pass}')`;
        const request = new mssql.Request();
        const result = await request.query(query);

        const result2 = await request.query('SELECT MAX(Id_utilizador) as MAX FROM utilizadores');

        let { MAX } = result2.recordset[0];
        console.log(MAX);

        const result3 = await request.query(`INSERT INTO clientes (Nif_Cli,Email ,Id_utilizador, NomeCli, Telemovel) VALUES (${nif},'${Email}', ${MAX}, '${NomeCLi}', '${Telemovel}')`);

        res.status(201).json({ message: 'Utilizador registado com sucesso' });
    } catch (err) {
        console.error('Error executing query:', err);

        res.status(500).json({ error: 'Erro ao registar o utilizador' });
    }
});

app.get('/availability', async (req, res) => {
    const { startDate, endDate } = req.query; // Use req.query para obter os parâmetros da solicitação GET
  
    try {
        const pool = await mssql.connect(config); // Conecte-se ao banco de dados usando as configurações
  
        const query = `
    SELECT *
    FROM tipo_quarto
    WHERE Id_tipo NOT IN (
        SELECT Id_quarto
        FROM reservas_quarto
        WHERE Data_inicio <= @startDate AND Data_fim >= @endDate
    )
    AND Lotacao >= (
        SELECT COUNT(Id_quarto)
        FROM reservas_quarto
        WHERE Data_inicio <= @startDate AND Data_fim >= @endDate
        AND tipo_quarto.Id_tipo = reservas_quarto.Id_quarto
    )`;


      
        const result = await pool.request()
            .input('startDate', mssql.Date, startDate)
            .input('endDate', mssql.Date, endDate)
            .query(query);
  
        const availableRooms = result.recordset; // Use result.recordset para obter os resultados da consulta
  
        res.json({ availableRooms: availableRooms });
    } catch (error) {
        console.error('Erro ao verificar disponibilidade:', error);
        res.status(500).json({ error: 'Erro ao verificar disponibilidade' });
    }
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
