import React, { useState } from 'react';
import '../../CSS/restaurante.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Restaurante() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  const flipCard1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const flipCard2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const slides = [
    {
      chef: 'Pedro Pena Bastos',
      text: 'Na sua cozinha aberta, o Chef pretende trazer "mais alegria e alma" à oferta do REAL do que é habitual na alta cozinha. Trabalha com pequenos fornecedores locais para conseguir ingredientes de excelente sabor e condição e colhe outros, como musgo de rena estaladiço, carne marmoreada de porco preto do Alentejo e "o melhor grão-de-bico que conseguimos encontrar" diretamente da natureza. No seu menu destaca-se cerca de uma dezena de pratos em simultâneo, que mudam consoante a estação, e tenta trabalhar com apenas dois ou três ingredientes "uma faca bem afiada" de cada vez, para melhor garantir que os hóspedes saboreiam a comida tal como deve ser saboreada. “Ponderamos tudo cuidadosamente para mantermos o foco na comida. É essa a nossa inspiração, o ponto principal de tudo o que fazemos.”',
      image: '../Imagens/IMGRESTAURANTE/chef1.png',
    },
    {
      chef: 'Diogo Lopes',
      text: 'O interesse de Diogo Lopes, Chef de Pastelaria do Restaurante REAL, pelas artes da pastelaria remonta aos seus tempos de infância em Portugal. Um "miúdo gorducho" com muito apetite, observava a mãe e a avó na cozinha e começou a fazer os seus próprios pratos simples. "Eu pensava: «gosto tanto de comer que, se calhar, devia cozinhar.» Muitos miúdos diziam o mesmo, mas eu estava a falar a sério". O sonho dele tornou-se realidade e hoje a sua sobremesa de alfarroba e alho preto, ovo e mel, framboesa e lavanda é o final perfeito para uma refeição no Restaurante REAL. “Valorizamos verdadeiramente os momentos frente a frente que temos com os clientes. As pessoas gostam de ter uma ligação com a cozinha, e é sempre bom lembrarmo-nos para quem trabalhamos.”',
      image: '../Imagens/IMGRESTAURANTE/chef2.png',
    },
  ];

  const arrowStyles = {
    position: 'relative',
    zIndex: 1000,
    top: '50%',
    width: '40px',
    height: '500px', // Altura das setas modificada aqui
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '50%',
  };

  const PrevArrow = (props) => {
    return (
      <div
        onClick={props.onClick}
        style={{ ...arrowStyles, left: 0 }}
      >
        {'<'}
      </div>
    );
  };

  const NextArrow = (props) => {
    return (
      <div
        onClick={props.onClick}
        style={{ ...arrowStyles, left: 0 }}
      >
        {'>'}
      </div>
    );
  };

  return (
    <div className="restaurante">
      <div className="head-text">
        <div>
          <img className="restaurante-img" src="../Imagens/IMGRESTAURANTE/rest.jpg" alt="Restaurante" />
        </div>
        <div className="text-on-image">
          <h1>Real Nature Gerês <br /> Restaurant & Bar</h1>
        </div>
      </div>
      <table cellSpacing="100px" className="tablerest">
        <tr>
          <h1 className="titulos">Restauração</h1>
          <div className="descquartos">
            <td className="descquartos">
              <div className={`flip-card ${isFlipped1 ? 'flipped' : ''}`} onClick={flipCard1}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className="imghotel-bar" src="../Imagens/IMGRESTAURANTE/hotel-in-geres-restaurant-new04.jpg" alt="Restaurante" />
                    <h4 className="nome titulos">Restaurante</h4>
                  </div>
                  <div className="flip-card-back">
                    <h4 className="card-info">Chef Pedro Pena Bastos & Pasteleiro Diogo Lopes</h4>
                    <h4 className="card-info">Restaurante Real Horário:</h4>
                    <p></p>
                    <div className="card-content">
                      <p>Pequeno Almoço: 07h - 10:30h</p>
                      <p>Almoço: 12h - 15h</p>
                      <p>Lanche: 16h - 18h</p>
                      <p>Jantar: 19h - 22h</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td className="descquartos">
              <div className={`flip-card ${isFlipped2 ? 'flipped' : ''}`} onClick={flipCard2}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className="imghotel-bar" src="../Imagens/IMGBAR/poolbar2.jpg" alt="Bar" />
                    <h4 className="nome titulos">Bar</h4>
                  </div>
                  <div className="flip-card-back">
                    <h4 className="card-info">Bar Real Nature</h4>
                    <h4 className="card-info">Horário: </h4>
                    <p></p>
                    <div className="card-content">
                      <p>8h - 02h</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </div>
        </tr>
      </table>
      <h2 className="titulos">Chefs do Restaurante Real</h2>
      <br></br>
      
      <div className="slide-container">
        <Slide
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {slides.map((slide, index) => (
            <div key={index} className="each-slide">
              <div className="chef-container">
                <div className="chef-content esquerda">
                  <h4 className="chefstitulo">{slide.chef}</h4>
                  <p className="chef-text">{slide.text}</p>
                </div>
                <div className="chef-content direita">
                  <img className="imgchef" src={slide.image} alt={`Chef ${slide.chef}`} />
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Restaurante;