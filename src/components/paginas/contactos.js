import React from "react";
import '../../CSS/contactos.css';


function Contactos() {
  return (
    <div className="contactos-geral">
      <div className="div">
        <br></br><br></br>
        <h1 className="contactos-titulo">Contactos</h1><br></br>
        <p className="informacoes">Tem alguma questão sobre uma reserva ou um quarto em particular? Necessita de mais informações sobre os nossos serviços?</p>
        <p className="informacoes">Seja para pedir informações ou esclarecimentos sobre algo relacionado com o Real Nature Hotel, disponibilizamos-lhe abaixo todos os meios que deve utilizar para o efeito.</p>
        <br></br><br></br>
      </div>
      <br></br><br></br>
      <h3 className="telefone">Email:</h3>
      <p className="contactos">hotel@real.natura.pt</p>
      <br></br>
      <h3 className="telefone">Telefone:</h3>
      <p className="contactos">Tlf: +351 253 682 396 (Chamada para a rede fixa nacional)</p>
      <p className="contactos">Fax: +351 253 39 00 29</p>
      <br></br>
      <h3 className="morada">Morada:</h3>
      <p className="contactos">Av. Manuel Francisco da Costa 54, 4845-067 Gerês, Portugal</p>
      <br></br>
      <a target="_blank" href="https://www.google.com/maps/place/Av.+Manuel+Francisco+da+Costa+54,+4845-067/@41.7256678,-8.1646202,688m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd2518c3c5a2f553:0x5cec134cf178b1d!8m2!3d41.7256638!4d-8.1620453!16s%2Fg%2F11mv_yb2m6?entry=ttu"><img src="../Imagens/mapa.png" className="contactosimg"></img></a>

      <table className="tabela">
        <tr>
          <td className="linha_tabela"> Para mais informações ou para reservas contacte-nos ou preencha o formulário </td>
        </tr>
        <br></br>
        <tr>
          <td className="linha_tabela"><input type="text" placeholder="Primeiro e Último nome"></input></td>
        </tr>
        <br></br>
        <tr>
          <td className="linha_tabela"><input type="text" placeholder="Telemóvel"></input></td>
        </tr>
        <br></br>
        <tr>
          <td className="linha_tabela"><input type="text" placeholder="Email"></input></td>
        </tr>
        <br></br>
        <tr>
          <td className="linha_tabela"><textarea name="message" rows="5" cols="30" placeholder="Observações"></textarea></td>
        </tr>
        <br></br>
        <tr>
          <td><button className="submeter_botao" type="button">Submeter</button></td>
        </tr>
      </table>

    </div>
  );
}
export default Contactos;