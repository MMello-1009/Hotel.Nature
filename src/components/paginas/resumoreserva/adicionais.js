import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../../CSS/adicionais.css';
import { format } from 'date-fns';

function Adicionais() {
  const [selectedPension, setSelectedPension] = useState(null);
  const startDate = new Date(new URLSearchParams(window.location.search).get('startDate'));
  const endDate = new Date(new URLSearchParams(window.location.search).get('endDate'));
  const selectedRooms = JSON.parse(new URLSearchParams(window.location.search).get('selectedRooms'));

  const handlePensionChange = (event) => {
    setSelectedPension(event.target.value);
  };

  return (
    <div className="adicionais">
      <div className="Pensoes">
        <form>
          <h1>Pensões</h1>
          <h2>Escolha o tipo de regime pretendido para a sua estadia:</h2>
          <table className="cardsebuttons">
            <tbody>
              <tr className="pensoescard">
                <td className="cardadicional">
                  <h2 >Alojamento</h2>
                  <p>Pequeno-almoço incluído.</p>
                  <p>Grátis</p>
                  <input className="radioinput"
                    type="radio"
                    id="alojamento"
                    name="Pensão"
                    value="alojamento"
                    checked={selectedPension === "alojamento"}
                    onChange={handlePensionChange}
                  />
                </td>

                <td className="cardadicional">
                  <h2>Meia pensão:</h2>
                  <p>Pequeno-almoço e 1 refeição incluida</p>
                  <p>Preço: 50€ por dia / pessoa</p>
                  <input className="radioinput"
                    type="radio"
                    id="meia-pensao"
                    name="Pensão"
                    value="meia-pensao"
                    checked={selectedPension === "meia-pensao"}
                    onChange={handlePensionChange}
                  />
                </td>

                <td className="cardadicional">
                  <h2>Pensão Completa:</h2>
                  <p>Pequeno-almoço, Almoço e Jantar incluído.</p>
                  <p>Preço: 100€ por dia / pessoa</p>
                  <input className="radioinput"
                    type="radio"
                    id="pensao-completa"
                    name="Pensão"
                    value="pensao-completa"
                    checked={selectedPension === "pensao-completa"}
                    onChange={handlePensionChange}
                  />
                </td>

              </tr>
              <table className="buttonsadicional" >
                <tr>
                  <td >
                    <div>
                      <Link to="/reserva" className="button1ad">Voltar</Link>
                    </div>
                  </td>
                  <td>
                    <div >
                      <Link
                        to={`/resumo?startDate=${format(startDate, 'yyyy-MM-dd')}&endDate=${format(endDate, 'yyyy-MM-dd')}&selectedRooms=${JSON.stringify(selectedRooms)}&selectedPension=${selectedPension}`}
                        className="button1ad"
                        onClick={(e) => {
                          const log=localStorage.getItem('loggedIn');
                          console.log(log);
                          if(log === 'false' || log === null) {
                            e.preventDefault();
                            alert("Por favor, faça login antes de prosseguir.");
                          }
                          else{
                          if (!selectedPension) {
                            e.preventDefault();
                            alert("Por favor, selecione um tipo de pensão antes de prosseguir.");
                          }
                        }
                        }}>
                        Resumo
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </tbody>
          </table>
        </form>
      </div>


      {/* Botão de voltar */}


    </div>
  );
}

export default Adicionais;
