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
  const {email, nome, tlm, nif, selectedNacionalidade, selectedRooms, selectedPension, precoTotal, startDate, endDate, getRoomTitle, calculateTotalPessoas}=req.body;
  
  const faturaHTML = `
    <h2>Fatura da Reserva</h2>
    <p><strong>Nome do Cliente:</strong> ${nome}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${tlm}</p>
    <p><strong>NIF:</strong> ${nif}</p>
    <p><strong>Nacionalidade:</strong> ${selectedNacionalidade}</p>
    <p><strong>Data de Check-in:</strong> ${startDate}</p>
    <p><strong>Data de Check-out:</strong> ${endDate}</p>
    <!-- Adicione outros detalhes da fatura conforme necessário -->
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

app.post('/gerarpdf', (req, res) => {
  const {email, nome, tlm, nif, selectedNacionalidade, selectedRooms, selectedPension, precoTotal, startDate, endDate, getRoomTitle,calculateTotalPessoas} = req.body;

  // Crie um novo documento PDF
  const doc = new PDFDocument();
  doc.fontSize(12).text(`Detalhes da Reserva:\n\n`);
    doc.fontSize(10).text(`Nome: ${nome}\n`);
    doc.fontSize(10).text(`Email: ${email}\n`);
    doc.fontSize(10).text(`Telefone: ${tlm}\n`);
    doc.fontSize(10).text(`Nacionalidade: ${selectedNacionalidade}\n`);
    doc.fontSize(10).text(`NIF: ${nif}\n`);
    doc.fontSize(10).text(`Check-in: ${startDate.toLocaleDateString()}\n`);
    doc.fontSize(10).text(`Check-out: ${endDate.toLocaleDateString()}\n`);
    doc.fontSize(10).text(`Quartos reservados:\n`);
    Object.entries(selectedRooms).forEach(([roomId, count]) => {
      doc.fontSize(10).text(`${count} Quarto${count > 1 ? 's' : ''} ${getRoomTitle(parseInt(roomId))}\n`);
    });
    doc.fontSize(10).text(`Pensão: ${nomepensao.find(item => item.selectedPension === selectedPension)?.title}\n`);
    doc.fontSize(10).text(`Número de Pessoas: ${calculateTotalPessoas(selectedRooms, quartoNomes)}\n`);
    doc.fontSize(10).text(`Preço total: €${precoTotal}\n`);
  
  // Salve o PDF em um arquivo temporário
  const filePath = 'temp.pdf';
  doc.pipe(fs.createWriteStream(filePath));
  doc.end();

  // Envie o arquivo PDF como resposta
  res.download(filePath, 'reserva.pdf', () => {
    // Remova o arquivo temporário após o download ser concluído
    fs.unlinkSync(filePath);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
