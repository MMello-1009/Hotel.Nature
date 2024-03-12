import React, { useState } from "react";
import "../../CSS/quartos.css";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Quartos() {
  const [popupOpen, setPopupOpen] = useState(false);

  const ConstantPopup = () => {
    return (
      <div>
        <p>Conteúdo do Popup</p>
        {/* Adicione aqui o conteúdo do seu popup */}
        <button onClick={() => setPopupOpen(false)}>Fechar Popup</button>
      </div>
    );
  };

  const openPopup = () => {
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
            <button onClick={openPopup} className="button1">Ver mais</button>
            {/* Popup */}
      <Popup
        open={popupOpen}
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
        {ConstantPopup()}
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
              <Link to="/" className="button1">Ver mais</Link>
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