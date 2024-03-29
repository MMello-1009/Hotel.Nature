var mssql = require('mssql');
var express = require('express');
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
mssql.connect(config, function(err) {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/login', async (req, res) => {
    const { email } = req.query;
    try {
        const request = new mssql.Request();
        let liga = `SELECT * FROM utilizadores`;
        if (email) {
            liga = `SELECT * FROM utilizadores WHERE Email='${email}'`;
        }
        const result = await request.query(liga);
        res.json(result.recordset);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Erro a obter dados' });
    }
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const query = `INSERT INTO utilizadores (Id_tipo, Email, Pass) VALUES ('${3}', '${email}', '${password}')`;
    try {
        const request = new mssql.Request();
        const result = await request.query(query);
        res.status(201).json({ message: 'Utilizador registado com sucesso' });
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Erro ao registar o utilizador' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
