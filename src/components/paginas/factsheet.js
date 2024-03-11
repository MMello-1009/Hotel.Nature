import React from "react";
import '../../CSS/factsheet.css';

function FactSheet(){
    return(
        <div>
          <img className ="factsheetimg" src ='../Imagens/rececaohotel.jpg'/>
          <h1 className="texto-na-imagen">FactSheet</h1>
          <br></br><br></br>
      <h1 className="titulos">Descrição</h1>
      
      <p className="textFactsheet">Em pleno coração da Serra do Gerês, o Real Nature Hotel é o local ideal 
        para usufruir de momentos de descanso e relaxamento, em ambiente familiar e repousante.
      </p>
      <br></br>

      <h1 className="titulos">Alojamento</h1>
      <p className="textFactsheet">O hotel dispõe de 40 quartos (dois para pessoas com mobilidade reduzida), 7 suites, 2 suites familiares, 20 quartos twin, 9 quartos duplo e 2 quartos de solteiro. 
        Em estilo contemporâneo e acolhedor predomina os tons suaves e repousantes. Com vistas deslumbrantes.
      </p>
      <br></br>

      <h1 className="titulos">Classificação</h1>
      <p className="textFactsheet">*****</p>
      <br></br>

      <h1 className="titulos">Animais de Estimação</h1>
      <p className="textFactsheet">São aceites!</p>
      <br></br>

      <h1 className="titulos">Check In/Check Out</h1>
      <p className="textFactsheet">Check In<br></br>15h00<br></br>Check Out<br></br>12h00</p>
    </div>

    );
}
export default FactSheet;