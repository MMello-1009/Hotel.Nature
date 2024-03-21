import React, { useState } from 'react';
import '../../CSS/contactos.css';

function Contactos() {
  const [telemovel, setTelemovel] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [enviado, setEnviado] = useState(false); // Estado para controlar se o e-mail foi enviado com sucesso
  const [erroCampoVazio, setErroCampoVazio] = useState(false); // Estado para controlar se ocorreu um erro de campo vazio

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se algum campo está vazio
    if (!telemovel || !email || !assunto) {
      alert('Preencha todos os campos antes de enviar o e-mail.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/enviar-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ telemovel, email, assunto }),
      });

      if (response.ok) {
        alert('O e-mail foi enviado com sucesso!');
        setEnviado(true); // Define enviado como verdadeiro se a resposta do servidor for bem-sucedida
        // Limpar campos do formulário após o envio
        setTelemovel('');
        setEmail('');
        setAssunto('');
      } else {
        throw new Error('Erro ao enviar email');
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert('Erro ao enviar email. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div className="contactos-geral">
      <div className="div">
        <br /><br />
        <h1 className="contactos-titulo">Contactos</h1><br />
        <p className="informacoes">Tem alguma questão sobre uma reserva ou um quarto em particular? Necessita de mais informações sobre os nossos serviços?</p>
        <p className="informacoes">Seja para pedir informações ou esclarecimentos sobre algo relacionado com o Real Nature Hotel, disponibilizamos-lhe abaixo todos os meios que deve utilizar para o efeito.</p>
        <br /><br />
      </div>
      <br /><br />
      <h3 className="telefone">Email:</h3>
      <p className="contactos">hotel@realnatura.pt</p>

      <h3 className="telefone">Telefone:</h3>
      <p className="contactos">Tlf: +351 253 682 396 (Chamada para a rede fixa nacional)</p>
      <p className="contactos">Fax: +351 253 39 00 29</p>

      <h3 className="morada">Morada:</h3>
      <p className="contactos">Av. Manuel Francisco da Costa 54, 4845-067 Gerês, Portugal</p>

      <a target="_blank" href="https://www.google.com/maps/place/Av.+Manuel+Francisco+da+Costa+54,+4845-067/@41.7256678,-8.1646202,688m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd2518c3c5a2f553:0x5cec134cf178b1d!8m2!3d41.7256638!4d-8.1620453!16s%2Fg%2F11mv_yb2m6?entry=ttu">
        <img src="../Imagens/mapa.png" className="contactosimg" alt="mapa" />
      </a>
      <br /><br />
      
      <form onSubmit={handleSubmit} method='POST'>
        <div className="contactos-geral">
          <p>Para mais informações ou para reservas contacte-nos ou preencha o formulário</p><br></br>
          <input className="linha_tabela" type="number" name="telemovel" placeholder="Telemovel" value={telemovel} onChange={(e) => setTelemovel(e.target.value)} style={{borderRadius:'10px'}}/>
          <br /><br />
          <input className="linha_tabela" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{borderRadius:'10px'}}/>
          <br /><br />
          <textarea className="linha_tabela" name="assunto" placeholder="Assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} style={{borderRadius:'10px'}}/>
          <br /><br />
          <button className='submeter_botao' type="submit">Submeter</button>
          <br /><br />
          {enviado && <p onClick={() => setEnviado(false)}></p>}
        </div>
      </form>
    </div>
  );
}

export default Contactos;
