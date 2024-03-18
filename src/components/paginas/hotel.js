import React from "react";
import { Slide } from 'react-slideshow-image';
import '../../CSS/hotel.css';


function Hotel() {

  const imagens =
    [
      "../Imagens/IMGBAR/pool1.jpg",
      "../Imagens/piscina/Piscina_interior.jpg",
      "../Imagens/IMGBAR/poolbar1.jpg",
      "../Imagens/Suite--/suite3.jpg"
      ,

    ];


  return (
    <div className="hotel">
      <div>
        <img class="imagem-header" src='../Imagens/Hotel_por_fora/hotel.jpg' />
        <p className="texto-img">Sobre nós</p>
      </div>
      <br></br><br></br>
      <div>
        <h1 className="titulo">Desde 2018</h1><br></br>
        <p className="texto-sobre-nos">Em pleno coração da Serra do Gerês, o Real Nature Hotel é o local ideal para usufruir de momentos de descanso e relaxamento, em ambiente familiar e repousante.
          <br></br>Para além do bom acolhimento e conforto, poderá ainda desfrutar de uma paisagem de beleza natural inigualável.<br></br>
          Todos os quartos do hotel incluem uma casa de banho privativa e ar condicionado, sendo que alguns também oferecem uma ótima vista para a natureza circundante. O hotel dispõe de acesso wifi gratuito.
          O restaurante do Real Nature Hotel apresenta no seu cardápio cozinha tradicional.<br></br> Os hóspedes podem, ainda, desfrutar da vista fantástica sobre a Serra do Gerês a partir das janelas e esplanada do restaurante , enquanto saboreiam a sua refeição.<br></br>
          Atualmente, no renovado espaço, Nature Wellness & Relax, no qual os hóspedes podem desfrutar de momentos de relaxamento e bem-estar, através de massagens e rituais de beleza, conduzindo-os numa viagem relaxante e retemperante.<br></br>
          O Real Nature Hotel também disponibiliza uma piscina exterior com espaços ajardinados, bar de apoio e piscina interior.
          A área circundante ao Real Nature Hotel providencia oportunidades para fazer caminhadas, canoagem e equitação, entre outras atividades.
        </p>
      </div>
      <br></br>
      <div>
        <img className="imagem-hotel" src='../Imagens/Suite_Familiar--/varanda.jpg' />
        <div className="overlay">
          <div className="circle">40 Quartos</div>
          <div className="circle">2100 Hóspedes Anuais</div>
          <div className="circle">36 Staff</div>

        </div>
      </div>
      
      <div>
        <h1 className="titulo">Facilidades & Serviços</h1><br></br><br></br>

        <div className='gridserviços'>
          <div className='griditem'>
            <img src='../Imagens/Serviços/wifi.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/quartos.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/spa.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/tv.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/ar.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/lavandaria.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/parque.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/cofre.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/pet.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/pequeno_almoco.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/piscina_ex.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/piscina_int.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/restaurante.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/bar.png'></img>
          </div>
          <div className='griditem'>
            <img src='../Imagens/Serviços/gym.png'></img>
          </div>
        </div>
      </div>
      <br></br><br></br>

      <Slide>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${imagens[0]})` }}>
            <span></span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${imagens[1]})` }}>
            <span></span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${imagens[2]})` }}>
            <span></span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${imagens[3]})` }}>
            <span></span>
          </div>
        </div>
        
      </Slide>
     
      <br></br><br></br>

    </div>

  );
}
export default Hotel;