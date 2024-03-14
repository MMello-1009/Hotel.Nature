import React, { useState } from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import '../../CSS/restaurante.css';


function Restaurante() {



  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  const flipCard1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const flipCard2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  return (
    <div className="restaurante">
      <div className="head-text">
        <div>
          <img className="restaurante-img" src='../Imagens/IMGRESTAURANTE/rest.jpg' />
        </div>
        <div className='text-on-image'>
          <h1>Real Nature Gerês <br></br>
            Restaurant & Bar</h1>
        </div>
      </div>
      <table cellSpacing="100px" className='tablerest'>
        <tr>
          <h1 className='titulos'>Restauração</h1>
          <div className='descquartos'>

            <td className='descquartos'>
              <div className={`flip-card ${isFlipped1 ? 'flipped' : ''}`} onClick={flipCard1}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className='imghotel-bar' src='../Imagens/IMGRESTAURANTE/hotel-in-geres-restaurant-new04.jpg' alt="Restaurante" />
                    <h4 className='nome titulos'>Restaurante</h4>

                  </div>
                  <div className="flip-card-back">
                    <h4 className='card-info'>Chef Pedro Pena Bastos & Pasteleiro Diogo Lopes</h4>

                    <h4 className='card-info'>Restaurante Real Horário:</h4>
                    <p></p>
                    <div className='card-content'>
                      <p>
                        Pequeno Almoço: 07h - 10:30h
                      </p>
                      <p>
                        Almoço: 12h - 15h
                      </p>
                      <p>
                        Lanche: 16h - 18h
                      </p>
                      <p>
                        Jantar: 19h - 22h
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </td>
            <td className='descquartos'>
              <div className={`flip-card ${isFlipped2 ? 'flipped' : ''}`} onClick={flipCard2}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className='imghotel-bar' src='../Imagens/IMGBAR/poolbar2.jpg' alt="Bar" />
                    <h4 className='nome titulos'>Bar</h4>
                  </div>
                  <div className="flip-card-back">
                    <h4 className='card-info'>Bar Real Nature</h4>
                    <h4 className='card-info'>Horário: </h4>
                    <p></p>
                    <div className='card-content'>
                      <p>8h - 02h</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </div>
        </tr>
      </table>
      <h2 className='titulos'>Conheça a nossa Equipa!</h2>
      <br></br><br></br>
      <h3 className='chefstitulo'>Chefs do Restaurante Real</h3>
      <br></br>
      <h4 className='chefstitulo'>Pedro Pena Bastos</h4>
      <div className='chef-container'>
        <div className='chef-content esquerda'>
          <a>Na sua cozinha aberta, o Chef pretende trazer "mais alegria e alma" à oferta do REAL do que é habitual na alta cozinha. Trabalha com pequenos fornecedores locais para conseguir ingredientes de excelente sabor e condição e colhe outros, como musgo de rena estaladiço, carne marmoreada de porco preto do Alentejo e "o melhor grão-de-bico que conseguimos encontrar" diretamente da natureza. No seu menu destaca-se cerca de uma dezena de pratos em simultâneo, que mudam consoante a estação, e tenta trabalhar com apenas dois ou três ingredientes "uma faca bem afiada" de cada vez, para melhor garantir que os hóspedes    saboreiam a comida tal como deve ser saboreada.
            “Ponderamos tudo cuidadosamente para mantermos o foco na comida. É  essa a nossa inspiração, o ponto principal de tudo o que fazemos.”
          </a>
        </div>
        <div className='chef-content direita'>
          <img className='imgchef' src='../Imagens/IMGRESTAURANTE/chef1.png'></img>
        </div>
      </div>

    </div>
  );
}
export default Restaurante;