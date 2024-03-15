const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para lidar com o envio do formulário

app.get('/enviar-formulario', (req, res) => {
  // Lógica para lidar com a solicitação GET para /enviar-formulario
  res.send('Página de envio de formulário');
});
  // Configurar o transporte SMTP para enviar e-mails
  const transporter = nodemailer.createTransport({
    host: 'webdomain04.dnscpanel.com',
    port: 465, // Porta padrão para SSL
    secure: true, // Usar SSL
    auth: {
      user: 'geral@hotelnature.pt', // Seu e-mail
      pass: 'Re@lNature#1' // Sua senha de e-mail
    }
  });

  // Configurações do e-mail
  const mailOptions = {
    from: 'geral@hotelnature.pt',
    to: email, // Alterado para usar o e-mail fornecido no formulário
    subject: 'Novo formulário enviado',
    text: `
      Telemóvel: ${telemovel}
      Email: ${email}
      Assunto: ${assunto}
    `,
    bcc: 'geral@realnature.pt' // Adicionado BCC para o endereço desejado
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


// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
