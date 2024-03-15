import React, { useState } from 'react';
import axios from 'axios';
import '../../CSS/contactos.css';


function EmailForm() {
  const [emailData, setEmailData] = useState({
    telemovel: '',
    email: '',
    assunto: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(emailData);
      alert('Email enviado com sucesso');
      // Limpe o formulário após o envio
      setEmailData({
        telemovel: '',
        email: '',
        assunto: ''
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert('Ocorreu um erro ao enviar o email');
    }
  };

  const sendEmail = async (emailData) => {
    const { telemovel, email, assunto } = emailData;
    await axios.post('/enviar-formulario', { telemovel, email, assunto });
  };

  return (
    <form onSubmit={handleSubmit} className="form" action="/enviar-formulario" method="post">
      <input className="linha_tabela" type="number" name="telemovel" placeholder="Telemovel" value={emailData.telemovel} onChange={handleChange}  />
      <br /><br />
      <input className="linha_tabela" type="email" name="email" placeholder="Email" value={emailData.email} onChange={handleChange}  />
      <br /><br />
      <input className="linha_tabela" type='textarea' name="assunto" placeholder="Assunto" value={emailData.assunto} onChange={handleChange}/>
      <br /><br />
      <button className='submeter_botao' type="submit">Submeter</button>
      <br /><br />
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
      <br /><br />
      <EmailForm />
    </div>
  );
}

export default Contactos;

