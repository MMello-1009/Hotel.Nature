const express = require('express');
const mssql = require("mssql/msnodesqlv8");
const cors = require('cors');
var bodyparser = require('body-parser');

const connection = new mssql.ConnectionPool({
    database: "M16_hotel",
    server: "(localdb)\\MSSQLLocalDB",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

const app = express();
const sql = require('mssql');


app.use(cors({
    origin: '*'
}));

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

connection.connect();

app.get('/login', (req, res) => {
    let { email } = req.query;
    if (email == null) {
        var liga = `SELECT * FROM utilizadores`;
    } else {
        var liga = `SELECT * FROM utilizadores WHERE Email='${email}'`;
    }
    connection.query(liga, (err, results) => {
        if (err) {
            res.status(500).json({
                error: 'Erro a obter dados'
            });
        } else {
            res.json(results.recordset);
        }
    })
});
app.post('/register', (req, res) => {
    const {
        email, password } = req.body;
    const query = `INSERT INTO utilizadores (Id_tipo ,Email, Pass) VALUES ('${3}','${email}', '${pass}')`;
    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).json({
                error: 'Erro ao registar o utilizador'
            });
        } else {
            res.status(201).json({
                message: 'Utilizador registado com sucesso'
            });
        }
    });
});

app.listen(4000, () => {
    console.log('Servidor à escuta na porta: 4000');
});