import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../../CSS/adicionais.css';

function Adicionais() {
  const [selectedPension, setSelectedPension] = useState(null);

  const handlePensionChange = (event) => {
    setSelectedPension(event.target.value);
  };

  return (
    <div className="adicionais">
      <div className="Pensoes">
        <form>
          <h1>Pensões</h1>
          <h2>Escolha o tipo de regime pretendido para a sua estadia:</h2>
          <table>
            <tr>
              <td>
                <h2>Meia pensão:</h2>
                <p>Pequeno-almoço incluído.</p>
                <p>Grátis</p>
                <input 
                  type="radio" 
                  id="meia-pensao" 
                  name="pensao" 
                  value="meia-pensao"
                  checked={selectedPension === "meia-pensao"}
                  onChange={handlePensionChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h2>Pensão Completa:</h2>
                <p>Pequeno-almoço, Almoço e Jantar incluído.</p>
                <p>Preço: 100€ por dia / pessoa</p>
                <input 
                  type="radio" 
                  id="pensao-completa" 
                  name="pensao" 
                  value="pensao-completa"
                  checked={selectedPension === "pensao-completa"}
                  onChange={handlePensionChange}
                />
              </td>
            </tr>
          </table>
        </form>
      </div>
      
      {/* Botão de voltar */}
      <div className="voltar">
        <Link to="/reserva" className="button">Voltar</Link>
      </div>
      <div className="seguinte">
        <Link to="/resumo" className="button">Resumo</Link>
      </div>
    </div>
  );
}

export default Adicionais;
