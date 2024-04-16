import React from "react";


//const fs = require('fs');
//const PDFDocument = require('pdfkit');
/*
function generateInvoice(invoice, path) {
  const doc = new PDFDocument({ size: 'A4', margin: 50 });

  // Registrar o PDF em um arquivo
  doc.pipe(fs.createWriteStream(path));

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
  const taxRate = 0.15; // 15% de imposto
  const tax = subtotal * taxRate;
  doc.text(`Imposto (15%): $${tax}`);

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
}

// Exemplo de uso:
const invoiceData = {
  customerName: 'João Silva',
  address: 'Rua das Flores, 123',
  email: 'joao@example.com',
  items: [
    { name: 'Produto 1', price: 50 },
    { name: 'Produto 2', price: 75 },
    { name: 'Produto 3', price: 30 },
  ],
};

generateInvoice(invoiceData, 'fatura.pdf');

export default generateInvoice;*/