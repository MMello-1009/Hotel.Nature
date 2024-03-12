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
                    <p>8h - 02h</p>
                  </div>
                </div>
              </div>
            </td>
          </div>
        </tr>
      </table>
      <h2 className='titulos'>Conheça a nossa Equipa!</h2>
      <br></br><br></br>

    </div>
  );
}
export default Restaurante;