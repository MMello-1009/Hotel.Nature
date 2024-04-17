import React from 'react';


function FaturaReserva() {
  const handleGenerateInvoice = async () => {
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

    try {
      const response = await fetch('http://localhost:4000/criar-fatura', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoiceData),
      });
      

      if (!response.ok) {
        throw new Error('Erro ao gerar fatura');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      // Abrir o PDF em uma nova janela
      window.open(url, '_blank');
    } catch (error) {
      console.error('Erro ao gerar fatura:', error);
    }
  };

  return (
    <div>
      <h1>Gerador de Fatura</h1>
      <button onClick={handleGenerateInvoice}>Gerar PDF da Fatura</button>
    </div>
  );
}

export default FaturaReserva;