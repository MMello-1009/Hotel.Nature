const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 3001;
app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware para analisar corpos de solicitação JSON
app.use(bodyParser.json());

// Rota para lidar com o envio de e-mail
app.post('/enviar-email', (req, res) => {
  const { telemovel, email, assunto } = req.body;

  // Configurar o transporte de e-mail
  const transporter = nodemailer.createTransport({
    host: 'webdomain04.dnscpanel.com',
    port: 465,
    secure: true, // Usar SSL
    auth: {
      user: 'geral@realnature.pt',
      pass: 'Re@lNature#1'
    }
  });

  // Configurar os detalhes do e-mail
  const mailOptions = {
    from: 'geral@realnature.pt',
    to: email, // Endereço de e-mail de destino
    bcc: 'geral@realnature.pt',
    subject: 'Confirmação de pedido de contacto',
    text: `Telemóvel: ${telemovel}\nEmail: ${email}\n\n${assunto}`
  };

  // Enviar o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar o e-mail:', error);
      res.status(500).send('Erro ao enviar o e-mail: ' + error.message);
    } else {
      console.log('E-mail enviado:', info.response);
      res.status(200).send('E-mail enviado com sucesso!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
