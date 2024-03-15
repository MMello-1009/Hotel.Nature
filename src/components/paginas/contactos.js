import React, { useState } from 'react';
import '../../CSS/contactos.css';

function EmailForm() {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você enviaria emailData para o seu servidor back-end
    console.log('Dados do email:', emailData);
    // Limpe o formulário após o envio
    setEmailData({
      to: '',
      subject: '',
      body: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input className="linha_tabela" type="text" name="telemovel" placeholder="Telemovel" value={emailData.telemovel} onChange={handleChange} />
      <br></br><br></br>
      <input className="linha_tabela" type="text" name="email" placeholder="Email" value={emailData.email} onChange={handleChange} />
      <br></br><br></br>
      <textarea className="linha_tabela" name="Assunto" placeholder="Assunto" value={emailData.Assunto} onChange={handleChange}></textarea>
      <br></br><br></br>
      <button className='submeter_botao' type="submit">Submeter</button> <br></br><br></br>
    </form>
  );
}

function Contactos() {
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
      <p className="contactos">hotel@real.natura.pt</p>
      
      <h3 className="telefone">Telefone:</h3>
      <p className="contactos">Tlf: +351 253 682 396 (Chamada para a rede fixa nacional)</p>
      <p className="contactos">Fax: +351 253 39 00 29</p>
      
      <h3 className="morada">Morada:</h3>
      <p className="contactos">Av. Manuel Francisco da Costa 54, 4845-067 Gerês, Portugal</p>
      
      <a target="_blank" href="https://www.google.com/maps/place/Av.+Manuel+Francisco+da+Costa+54,+4845-067/@41.7256678,-8.1646202,688m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd2518c3c5a2f553:0x5cec134cf178b1d!8m2!3d41.7256638!4d-8.1620453!16s%2Fg%2F11mv_yb2m6?entry=ttu">
        <img src="../Imagens/mapa.png" className="contactosimg" alt="mapa" />
      </a>
      <br></br><br></br>
      <EmailForm />
    </div>
  );
}

export default Contactos;
