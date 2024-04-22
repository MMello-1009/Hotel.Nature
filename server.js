const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 3001;
app.use(cors({ origin: 'http://localhost:3000' }));
const pdf = require('html-pdf');




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

app.post('/enviaresumo', (req, res) => {
  const { email, nif, tlm, nome, precoTotal, startDate, endDate, totalPessoas, roomIds, idPensao, selectedNacionalidade } = req.body;
  const pensionTitle = idPensao === 'alojamento' ? 'Alojamento' : idPensao === 'meia-pensao' ? 'Meia Pensão' : 'Pensão Completa';
  const faturaHTML = `
  <h2>Fatura da Reserva</h2>
  <p><strong>Nome do Cliente:</strong> ${nome}</p>
  <p><strong>E-mail:</strong> ${email}</p>
  <p><strong>Telefone:</strong> ${tlm}</p>
  <p><strong>NIF:</strong> ${nif}</p>
  <p><strong>Nacionalidade:</strong> ${selectedNacionalidade}</p>
  <p><strong>Data de Check-in:</strong> ${startDate}</p>
  <p><strong>Data de Check-out:</strong> ${endDate}</p>
  <p><strong>Pensão:</strong> ${pensionTitle}</p>
  <p><strong>Preço Total:</strong> ${precoTotal}</p>
`;

  pdf.create(faturaHTML).toBuffer(async (err, buffer) => {
    if (err) {
      console.error('Erro ao criar PDF:', err);
      res.status(500).send('Erro ao criar PDF da fatura.');
      return;
    }
  
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
    subject: 'Confirmamos a sua reserva!',
    text: `Prezado Cliente\n\nA sua reserva foi efetuada com sucesso! 
    Agradecemos a sua preferência e esperamos que desfrute da sua estadia no Real Nature Hotel.
    \n\nAtenciosamente,
    \nReal Nature Hotel\n\n`,
    attachments: [{
      filename: 'fatura.pdf',
      content: buffer
    }]
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
});



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
