import React, { useState } from "react";
import "../../CSS/quartos.css";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Slide } from 'react-slideshow-image';




function Quartos() {

  const imagens =
  [
    "../Imagens/IMGBAR/pool1.jpg",
    "../Imagens/piscina/Piscina_interior.jpg",
    "../Imagens/IMGBAR/poolbar1.jpg",
    "../Imagens/Suite--/suite3.jpg"
    ,

  ];

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(null);

  const SuitePopUp = () => {
    return (
      <div className="popup">
        <table>
          <tr>
            <td>
            <Slide>

            </Slide>
            </td>
            <td>
              
              <p className="roomtitle">Suite</p>
              <div><img src="..\Imagens\infoquartosicon\house-blank.svg" className="icons"></img>Suite Privada </div>
              <div><img src="..\Imagens\infoquartosicon\ruler-combined.svg" className="icons"></img>50m2 </div>
              <div><img src="..\Imagens\infoquartosicon\umbrella-beach.svg" className="icons"></img>Varanda </div>
              <div><img src="..\Imagens\infoquartosicon\mountain.svg" className="icons"></img>Vista para montanha </div>
              <div><img src="..\Imagens\infoquartosicon\air-conditioner.svg" className="icons"></img>Ar Condicionado </div>
              <div><img src="..\Imagens\infoquartosicon\shower.svg" className="icons"></img>WC privado</div> 
              <div><img src="..\Imagens\infoquartosicon\tv-retro.svg" className="icons"></img>Televisão </div>
              <div><img src="..\Imagens\infoquartosicon\volume-mute.svg" className="icons"></img>Insonoração </div>
              <div><img src="..\Imagens\infoquartosicon\coffee-bean.svg" className="icons"></img>Minibar </div>
              <div><img src="..\Imagens\infoquartosicon\wifi.svg" className="icons"></img>Wifi </div>
              <div><img src="..\Imagens\infoquartosicon\bed-alt.svg" className="icons"></img>Cama Extra Grande </div> 
              <p className="subtitle">Na sua casa de banho privada:</p>
              <table>
                <tr>
              <td className="iconcaptions">
              <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Toalhas </div>
              <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Produtos de Higiene </div>
              <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Roupão de Banho </div>
              </td>
              <td className="iconcaptions">
              <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Banheira ou Chuveiro </div>
              <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Chinelos de Quarto </div>
              <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Secador de Cabelo </div>
              </td>
              </tr>
              </table>

            </td>
          </tr>
        </table>
        
        
        <button onClick={() => setPopupOpen(false)} className="button1">Fechar Popup</button>
      </div>
    );
  };

  const QuartDuploPopUp = () => {
    return (
      <div>
        <p>Quarto Duplo</p>
        <button onClick={() => setPopupOpen(false)}>Fechar Popup</button>
      </div>
    );
  };

  const openPopup = (popupType) => {
    setSelectedPopup(popupType);
    setPopupOpen(true);
  };

  
    return(
        <div>
          <p className="pagetitle">Quartos</p>
          <div class="card">
          <div class="card-image">
            <img src="../Imagens/Suite--/suite1.jpg" alt="Suite Modern King Bed Room" />
          </div>
          <div class="card-content">
            <p className="roomtitle">Suite</p>
            <p>Quarto apelativo pelo estilo moderno, pela comodidade que 
              oferece com cama extragrande e 
              pela sua varanda individual com vistas deslumbrantes.
              
               <li>Área de quarto: 50m²</li>
               <li>Capacidade: 2 Pessoas</li>
               <li> Ar condicionado</li>
               <li> Pequeno-Almoço incluído</li>
               <li> Parque gratuito</li>
               <li>  TV LCD </li>
               <li> Internet Wi-Fi</li>
               </p>
            <div className="card-buttons">
            <button onClick={() => openPopup("suite")} className="button1">
            Ver mais
          </button>
          {/* Popup */}
          <Popup
            open={popupOpen && selectedPopup === "suite"}
            onClose={() => setPopupOpen(false)}
            closeOnDocumentClick
            closeOnEscape
            position="center center"
            contentStyle={{
              padding: 30 ,
              width:'60%',
              border: "1px solid #ccc",
              borderRadius: 5,
            }}
          >
            {SuitePopUp()}
          </Popup>
              <Link to="/" className="button2">Reservar</Link>
            </div>
          </div>

          </div>
          <div class="card">
          <div class="card-image">
            <img src="../Imagens/Quarto_Duplo--/quartoduplo2.jpg" alt="Suite Modern King Bed Room" />
          </div>
          <div class="card-content">
            <p className="roomtitle">Quarto Duplo</p>
            <p>Quarto apelativo pela comodidade que oferece
               e pela sua varanda individual com
                vistas deslumbrantes.
              
               <li>Área de quarto: 30m²</li>
               <li>Capacidade: 2 Pessoas</li>
               <li> Ar condicionado</li>
               <li> Pequeno-Almoço incluído</li>
               <li> Parque gratuito</li>
               <li>  TV LCD </li>
               <li> Internet Wi-Fi</li>
               </p>
            <div className="card-buttons">
            <button onClick={() => openPopup("quartDuplo")} className="button1">
            Ver mais
          </button>
          {/* Popup */}
          <Popup
            open={popupOpen && selectedPopup === "quartDuplo"}
            onClose={() => setPopupOpen(false)}
            closeOnDocumentClick
            closeOnEscape
            position="center center"
            contentStyle={{
              padding: 20,
              border: "1px solid #ccc",
              borderRadius: 5,
            }}
          >
            {QuartDuploPopUp()}
          </Popup>
              <Link to="/" className="button2">Reservar</Link>
            </div>
          </div>

          </div>

          <div class="card">
          <div class="card-image">
            <img src="../Imagens/Quarto_twin/camas.jpg" alt="Suite Modern King Bed Room" />
          </div>
          <div class="card-content">
            <p className="roomtitle">Quarto Twin</p>
            <p>Quarto apelativo pela comodidade que oferece. 
              Este quarto eleva o conceito de conforto, 
              aliado a uma decoração cuidada e repousante.
              
               <li>Capacidade: 2 Pessoas</li>
               <li>2 camas individuais (0.90 x 1.90mts)</li>
               <li> Ar condicionado</li>
               <li> Pequeno-Almoço incluído</li>
               <li> Parque gratuito</li>
               <li>  TV LCD </li>
               <li> Internet Wi-Fi</li>
               </p>
            <div className="card-buttons">
              <Link to="/" className="button1">Ver mais</Link>
              <Link to="/" className="button2">Reservar</Link>
            </div>
          </div>

          </div>

          <div class="card">
          <div class="card-image">
            <img src="../Imagens/Suite_Familiar--/2quartos.jpg" alt="Suite Modern King Bed Room" />
          </div>
          <div class="card-content">
            <p className="roomtitle">Suite Familiar</p>
            <p>A decoração em tons de verde e branco
               apelam às belas paisagens da Serra.
              
               <li> Área de quarto: 40m² (25m² + 15m² )</li>
               <li>Capacidade: 4 Pessoas</li>
               <li> Ar condicionado</li>
               <li> Pequeno-Almoço incluído</li>
               <li> Parque gratuito</li>
               <li> TV LCD </li>
               <li> Internet Wi-Fi</li>
               </p>
            <div className="card-buttons">
              <Link to="/" className="button1">Ver mais</Link>
              <Link to="/" className="button2">Reservar</Link>
            </div>
          </div>

          </div>

          <div class="card" style={{ marginBottom:'3%' }} >
          <div class="card-image">
            <img src="../Imagens/Quarto_Solteiro/quarto_single.jpg" alt="Suite Modern King Bed Room" />
          </div>
          <div class="card-content">
            <p className="roomtitle">Quarto Solteiro</p>
            <p>Seja em trabalho ou numa aventura a solo, o quarto Single é a escolha perfeita para uma estada curta.
Este é um espaço único, pois associa materiais clássicos ao toque de contemporaneidade que se reflecte através das suas 
comodidades.
              
               <li>Área de quarto: 18m²</li>
               <li>Capacidade: 1 Pessoas</li>
               <li> Ar condicionado</li>
               <li> Pequeno-Almoço incluído</li>
               <li> Parque gratuito</li>
               <li> TV LCD </li>
               <li> Internet Wi-Fi</li>
               </p>
            <div className="card-buttons">
              <Link to="/" className="button1">Ver mais</Link>
              <Link to="/" className="button2">Reservar</Link>
            </div>
          </div>

          </div>

          <Popup
        closeOnDocumentClick
        closeOnEscape
        position="center center"
        contentStyle={{
          padding: 20,
          border: '1px solid #ccc',
          borderRadius: 5,
        }}
      >
        
      </Popup>

       </div>

    );
}
export default Quartos;