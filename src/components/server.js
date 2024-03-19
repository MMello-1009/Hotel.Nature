const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para lidar com o envio do formulário
app.post('/enviar-formulario', async (req, res) => {
  const { telemovel, email, assunto } = req.body;

  // Configurar o transporte SMTP para enviar e-mails
  const transporter = nodemailer.createTransport({
    host: 'webdomain04.dnscpanel.com',
    port: 465, // Porta padrão para SSL
    secure: true, // Usar SSL
    auth: {
      user: 'geral@realnature.pt', // Seu e-mail
      pass: 'Re@lNature#1' // Sua senha de e-mail
    }
  });

  // Configurações do e-mail
  const mailOptions = {
    from: 'geral@hotelnature.pt',
    to: email, // Alterado para usar o e-mail fornecido no formulário
    bcc: 'geral@realnature.pt', // Adicionado o endereço de e-mail para o campo Bcc
    subject: 'Novo formulário enviado',
    text: `
      Telemóvel: ${telemovel}
      Email: ${email}
      Assunto: ${assunto}
    `
  };

  try {
    // Enviar e-mail
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso:', info);
    res.status(200).send('Formulário enviado com sucesso');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).send('Ocorreu um erro ao enviar o e-mail');
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
