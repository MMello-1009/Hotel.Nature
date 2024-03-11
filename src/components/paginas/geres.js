import React from "react";
import '../../CSS/geres.css'
const geres= () => {
    return (
      <div className="container">
        <div className="headerimg">
          <div className ="header">
            <img src ='../Imagens/Paisagens/geres.jpg'/>
            <p>Desfrute do melhor do Gerês</p>
          </div>
        <div>
            <div className="headertitle"> 
                <p>
                  O que visitar no Gerês?
                  </p>
            </div>
            
<div className="scroll">
            <table className="tables" >
              
              <tr>
                <div className="divvisit">
                <td>
                    <img src="/Imagens/Paisagens/cascata-do-arado.jpg"/>
                    <h2>Cascata do Arado</h2>
                    <p>Considerada como uma das mais belas quedas de água do Parque Nacional da Peneda Gerês, é também uma das mais visitadas.
                       A sua localização a 900 metros de altitude e a sucessão de cascatas de águas cristalinas
                        proporcionam ao visitante um lago límpido, em perfeita sintonia com a rocha que a envolve. Um fenómeno 
                        da natureza fascinante.</p>
                </td>
                </div>
                <div className="divvisit">
                <td>
                  
                    <img src="../Imagens/Paisagens/miradouro-da-pedra-bela.jpg"/>
                    <h2>Miradouro da Pedra Bela</h2>
                    <p>Localizado a 800 metros de altitude, o Miradouro da Pedra Bela reflete a beleza fantástica do Parque
                       Nacional da Peneda Gerês. Sendo já um dos locais mais visitados na Serra do Gerês, aqui poderá
                        usufruir da mata constituída por Pinheiros Ibéricos e Cedros, bem como de uma incrível vista sobre as montanhas, a Caniçada,
                         a Vila das Caldas do Gerês e Vilar da Veiga.</p>
                  

                </td>
                </div>
                <div className="divvisit">
                <td>
                    <img src="../Imagens/Paisagens/albufeira-da-caniçada.jpg"/>
                    <h2>Albufeira da Caniçada</h2>
                    <p>Um dos locais mais incontornáveis da Serra do Gerês, onde é possível vislumbrar um formidável pôr do sol. 
                      Aqui é possível a prática dos mais diversos desportos aquáticos, incluindo uma viagem de barco pelo Rio Caldo com caráter turístico e ambiental.
                       Aceite o desafio e conheça toda a paisagem circundante</p>
                </td>
                </div>
              </tr>
              
            </table>
            </div>
          </div>
          
        
        </div>
      </div>
     
    );
  };
  
  export default geres