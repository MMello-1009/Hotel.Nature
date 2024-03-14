import React, { useState } from "react";
import "../../CSS/quartos.css";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



function Quartos() {

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(null);

  

  
  const SuitePopUp = () => {
    const imagens = [
      "../Imagens/Suite--/suite1.jpg",
      "../Imagens/Suite--/suite2.jpg",
      "../Imagens/Suite--/suite3.jpg",
      "../Imagens/Suite--/suite4.jpg"
    ];
  
    return (
      <div className="popup">
        <div onClick={() => setPopupOpen(false)}><img src="..\Imagens\infoquartosicon\circle-xmark.svg" alt="Icon" className="close-btn"></img></div>
        <table>
          <tr className="roomtitle"><p>Suite</p></tr>
            <tr className="slideshow">
              
              <td>
              
              <Slide>
                {imagens.map((image, index) => (
                  <div key={index} className="each-slide-effect">
                    <div style={{ backgroundImage: `url(${image})`, objectFit:'cover' }}>
                    </div>
                  </div>
                ))}
              </Slide>
              </td>
              <td>
                <br></br>
      
                <div><img src="..\Imagens\infoquartosicon\house-blank.svg" className="icons" alt="Icon"></img>Suite Privada</div>
                <div><img src="..\Imagens\infoquartosicon\ruler-combined.svg" className="icons" alt="Icon"></img>50m2</div>
                <div><img src="..\Imagens\infoquartosicon\umbrella-beach.svg" className="icons" alt="Icon"></img>Varanda</div>
                <div><img src="..\Imagens\infoquartosicon\mountain.svg" className="icons" alt="Icon"></img>Vista para montanha</div>
                <div><img src="..\Imagens\infoquartosicon\air-conditioner.svg" className="icons" alt="Icon"></img>Ar Condicionado</div>
                <div><img src="..\Imagens\infoquartosicon\shower.svg" className="icons" alt="Icon"></img>WC privado</div>
                <div><img src="..\Imagens\infoquartosicon\tv-retro.svg" className="icons" alt="Icon"></img>Televisão</div>
                <div><img src="..\Imagens\infoquartosicon\volume-mute.svg" className="icons" alt="Icon"></img>Insonoração</div>
                <div><img src="..\Imagens\infoquartosicon\coffee-bean.svg" className="icons" alt="Icon"></img>Minibar</div>
                <div><img src="..\Imagens\infoquartosicon\wifi.svg" className="icons" alt="Icon"></img>Wifi</div>
                <div><img src="..\Imagens\infoquartosicon\bed-alt.svg" className="icons" alt="Icon"></img>Cama Extra Grande</div>
                <p className="subtitle">Na sua casa de banho privada:</p>
                <table>
                  <tbody>
                    <tr>
                      <td className="iconcaptions">
                        <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons" alt="Icon"></img>Toalhas</div>
                        <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons" alt="Icon"></img>Produtos de Higiene</div>
                        <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons" alt="Icon"></img>Roupão de Banho</div>
                      </td>
                      <td className="iconcaptions">
                        <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons" alt="Icon"></img>Banheira ou Chuveiro</div>
                        <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons" alt="Icon"></img>Chinelos de Quarto</div>
                        <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons" alt="Icon"></img>Secador de Cabelo</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          
        </table>
        
      </div>
    );
  };
  

  const QuartDuploPopUp = () => {
    const imagens = [
      "../Imagens/Quarto_Duplo--/quartoduplo1.jpg",
      "../Imagens/Quarto_Duplo--/quartoduplo2.jpg",
      "../Imagens/Quarto_Duplo--/quartoduplo3.jpg",
      "../Imagens/Quarto_Duplo--/quartoduplo4.jpg"
    ];
  
    return (
      <div className="popup">
        <div onClick={() => setPopupOpen(false)}><img src="..\Imagens\infoquartosicon\circle-xmark.svg" alt="Icon" className="close-btn"></img></div>
        <table>
          <tr className="roomtitle"><p>Quarto Duplo</p></tr>
            <tr className="slideshow">
              
              <td>
              
              <Slide>
                {imagens.map((image, index) => (
                  <div key={index} className="each-slide-effect">
                    <div style={{ backgroundImage: `url(${image})`, objectFit:'cover' }}>
                    </div>
                  </div>
                ))}
              </Slide>
              </td>
              <td>
                <br></br>
      
                <div><img src="..\Imagens\infoquartosicon\house-blank.svg" className="icons"></img>Quarto Duplo</div>
            <div><img src="..\Imagens\infoquartosicon\ruler-combined.svg" className="icons"></img>14m2 </div>
            <div><img src="..\Imagens\infoquartosicon\umbrella-beach.svg" className="icons"></img>Varanda </div>
            <div><img src="..\Imagens\infoquartosicon\mountain.svg" className="icons"></img>Vista para montanha </div>
            <div><img src="..\Imagens\infoquartosicon\air-conditioner.svg" className="icons"></img>Ar Condicionado </div>
            <div><img src="..\Imagens\infoquartosicon\shower.svg" className="icons"></img>WC privado</div> 
            <div><img src="..\Imagens\infoquartosicon\tv-retro.svg" className="icons"></img>Televisão </div>
            <div><img src="..\Imagens\infoquartosicon\volume-mute.svg" className="icons"></img>Insonoração </div>
            <div><img src="..\Imagens\infoquartosicon\coffee-bean.svg" className="icons"></img>Minibar </div>
            <div><img src="..\Imagens\infoquartosicon\wifi.svg" className="icons"></img>Wifi </div>
            <div><img src="..\Imagens\infoquartosicon\bed-alt.svg" className="icons"></img>Cama de Casal </div> 
                <p className="subtitle">Na sua casa de banho privada:</p>
                <table>
                  <tbody>
                    <tr>
                    <td className="iconcaptions">
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Toalhas </div>
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Produtos de Higiene </div>
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Bidé </div>
            </td>
            <td className="iconcaptions">
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Chuveiro </div>
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Chinelos de Quarto </div>
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Secador de Cabelo </div>
            </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          
        </table>
        
      </div>
    );
  };

  
  const QuartoTwinPopUp = () => {
    const imagens = [
      "../Imagens/Quarto_twin/camas.jpg",
      "../Imagens/Quarto_twin/casa_de_banho.jpg",
      "../Imagens/Quarto_twin/camas.jpg",
      "../Imagens/Quarto_twin/casa_de_banho.jpg",
    ];
  
    return (
      <div className="popup">
        <div onClick={() => setPopupOpen(false)}><img src="..\Imagens\infoquartosicon\circle-xmark.svg" alt="Icon" className="close-btn"></img></div>
        <table>
          <tr className="roomtitle"><p>Quarto Twin</p></tr>
            <tr className="slideshow">
              
              <td>
              
              <Slide>
                {imagens.map((image, index) => (
                  <div key={index} className="each-slide-effect">
                    <div style={{ backgroundImage: `url(${image})`, objectFit:'cover' }}>
                    </div>
                  </div>
                ))}
              </Slide>
              </td>
              <td>
                <br></br>
      
                <div><img src="..\Imagens\infoquartosicon\house-blank.svg" className="icons"></img>Quarto Twin</div>
            <div><img src="..\Imagens\infoquartosicon\ruler-combined.svg" className="icons"></img>50m2 </div>
            <div><img src="..\Imagens\infoquartosicon\umbrella-beach.svg" className="icons"></img>Varanda </div>
            <div><img src="..\Imagens\infoquartosicon\mountain.svg" className="icons"></img>Vista para montanha </div>
            <div><img src="..\Imagens\infoquartosicon\air-conditioner.svg" className="icons"></img>Ar Condicionado </div>
            <div><img src="..\Imagens\infoquartosicon\shower.svg" className="icons"></img>WC privado</div> 
            <div><img src="..\Imagens\infoquartosicon\tv-retro.svg" className="icons"></img>Televisão </div>
            <div><img src="..\Imagens\infoquartosicon\volume-mute.svg" className="icons"></img>Insonoração </div>
            <div><img src="..\Imagens\infoquartosicon\coffee-bean.svg" className="icons"></img>Minibar </div>
            <div><img src="..\Imagens\infoquartosicon\wifi.svg" className="icons"></img>Wifi </div>
            <div><img src="..\Imagens\infoquartosicon\bed-alt.svg" className="icons"></img>Duas camas de solteiro</div> 
                <p className="subtitle">Na sua casa de banho privada:</p>
                <table>
                  <tbody>
                    <tr>
                    <td className="iconcaptions">
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Toalhas </div>
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Produtos de Higiene </div>
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Bidé </div>
            </td>
            <td className="iconcaptions">
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Banheira ou Chuveiro </div>
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Chinelos de Quarto </div>
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Secador de Cabelo </div>
            </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          
        </table>
        
      </div>
    );
  };

  
  const SuiteFamiliarPopUp = () => {
    const imagens = [
      "../Imagens/Suite_Familiar--/2quartos.jpg",
      "../Imagens/Suite_Familiar--/quarto_duasCamas.jpg",
      "../Imagens/Suite--/quartoCasal.jpg",
      "../Imagens/Suite--/varanda.jpg"
    ];
  
    return (
      <div className="popup">
        <div onClick={() => setPopupOpen(false)}><img src="..\Imagens\infoquartosicon\circle-xmark.svg" alt="Icon" className="close-btn"></img></div>
        <table>
          <tr className="roomtitle"><p>Suite Familiar</p></tr>
            <tr className="slideshow">
              
              <td>
              
              <Slide>
                {imagens.map((image, index) => (
                  <div key={index} className="each-slide-effect">
                    <div style={{ backgroundImage: `url(${image})`, objectFit:'cover' }}>
                    </div>
                  </div>
                ))}
              </Slide>
              </td>
              <td>
                <br></br>
      
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
                  <tbody>
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
                  </tbody>
                </table>
              </td>
            </tr>
          
        </table>
        
      </div>
    );
  };

  
  const QuartoSolteiroPopUp = () => {
    const imagens = [
      "../Imagens/Quarto_Solteiro/quarto_single.jpg",
      "../Imagens/Quarto_Solteiro/single.jpg",
      "../Imagens/Quarto_Solteiro/quarto_single.jpg",
      "../Imagens/Quarto_Solteiro/single.jpg",
    ];
  
    return (
      <div className="popup">
        <div onClick={() => setPopupOpen(false)}><img src="..\Imagens\infoquartosicon\circle-xmark.svg" alt="Icon" className="close-btn"></img></div>
        <table>
          <tr className="roomtitle"><p>Quarto Solteiro</p></tr>
            <tr className="slideshow">
              
              <td>
              
              <Slide>
                {imagens.map((image, index) => (
                  <div key={index} className="each-slide-effect">
                    <div style={{ backgroundImage: `url(${image})`, objectFit:'cover' }}>
                    </div>
                  </div>
                ))}
              </Slide>
              </td>
              <td>
                <br></br>
      
                <div><img src="..\Imagens\infoquartosicon\house-blank.svg" className="icons"></img>Quarto de Solteiro </div>
            <div><img src="..\Imagens\infoquartosicon\ruler-combined.svg" className="icons"></img>12m2 </div>
            <div><img src="..\Imagens\infoquartosicon\umbrella-beach.svg" className="icons"></img>Varanda </div>
            <div><img src="..\Imagens\infoquartosicon\mountain.svg" className="icons"></img>Vista para montanha </div>
            <div><img src="..\Imagens\infoquartosicon\air-conditioner.svg" className="icons"></img>Ar Condicionado </div>
            <div><img src="..\Imagens\infoquartosicon\shower.svg" className="icons"></img>WC privado</div> 
            <div><img src="..\Imagens\infoquartosicon\tv-retro.svg" className="icons"></img>Televisão </div>
            <div><img src="..\Imagens\infoquartosicon\volume-mute.svg" className="icons"></img>Insonoração </div>
            <div><img src="..\Imagens\infoquartosicon\coffee-bean.svg" className="icons"></img>Minibar </div>
            <div><img src="..\Imagens\infoquartosicon\wifi.svg" className="icons"></img>Wifi </div>
            <div><img src="..\Imagens\infoquartosicon\bed-alt.svg" className="icons"></img>Cama de Solteiro</div>
                <p className="subtitle">Na sua casa de banho privada:</p>
                <table>
                  <tbody>
                    <tr>
                    <td className="iconcaptions">
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Toalhas </div>
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Produtos de Higiene </div>
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Bidé </div>
            </td>
            <td className="iconcaptions">
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Banheira ou Chuveiro </div>
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Chinelos de Quarto </div>
            <div className="captions"><img src="..\Imagens\infoquartosicon\check-circle.svg" className="icons"></img>Secador de Cabelo </div>
            </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          
        </table>
        
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
              display:'block',
              padding: 5 ,
              width:'60%',
              height:'fit-content',
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
              display:'block',
              padding: 5 ,
              width:'60%',
              height:'fit-content',
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
            <button onClick={() => openPopup("quartotwin")} className="button1">
            Ver mais
          </button>
          {/* Popup */}
          <Popup
            open={popupOpen && selectedPopup === "quartotwin"}
            onClose={() => setPopupOpen(false)}
            closeOnDocumentClick
            closeOnEscape
            position="center center"
            contentStyle={{
              display:'block',
              padding: 5 ,
              width:'60%',
              height:'fit-content',
              border: "1px solid #ccc",
              borderRadius: 5,
            }}
          >
            {QuartoTwinPopUp()}
          </Popup>
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
            <button onClick={() => openPopup("suitefamiliar")} className="button1">
            Ver mais
          </button>
          {/* Popup */}
          <Popup
            open={popupOpen && selectedPopup === "suitefamiliar"}
            onClose={() => setPopupOpen(false)}
            closeOnDocumentClick
            closeOnEscape
            position="center center"
            contentStyle={{
              display:'block',
              padding: 5 ,
              width:'60%',
              height:'fit-content',
              border: "1px solid #ccc",
              borderRadius: 5,
            }}
          >
            {SuiteFamiliarPopUp()}
          </Popup>
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
            <button onClick={() => openPopup("quartosolteiro")} className="button1">
            Ver mais
          </button>
          {/* Popup */}
          <Popup
            open={popupOpen && selectedPopup === "quartosolteiro"}
            onClose={() => setPopupOpen(false)}
            closeOnDocumentClick
            closeOnEscape
            position="center center"
            contentStyle={{
              display:'block',
              padding: 5 ,
              width:'60%',
              height:'fit-content',
              border: "1px solid #ccc",
              borderRadius: 5,
            }}
          >
            {QuartoSolteiroPopUp()}
          </Popup>
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