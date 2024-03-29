import React, { useState} from "react";
import '../../CSS/reservas.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

function Reservas() {

    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    
    
 
    return (
        <div className="reservas">
            <div className="disponibilidade">
                <table>
                    <td>
                <div className="divcheckin">
                    <p>Check In</p>
                <DatePicker className="checkin"
                    selectsStart
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    startDate={startDate}
  
                />
                </div>
                </td>

                <td>
                <div className="divcheckout">
                <p>Check Out</p>
                <DatePicker className="checkin"
                    selectsEnd
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    endDate={endDate}
                    startDate={startDate}
                    minDate={startDate}
                />
                </div>
                </td>

                <td>
                <button className="botao-disponibilidade" type="button">Verificar disponibilidade</button>
                </td>
                </table>
            </div>
            <div>
          
          <div class="card">
          <div class="card-image">
            <img src="../Imagens/Suite--/suite1.jpg" alt="Suite Modern King Bed Room" />
          </div>
          <div class="card-content">
            <p className="roomtitle">Suite</p>
            <p style={{fontFamily:'Belleza', color:'black', marginBottom:'10px'}}>Quarto apelativo pelo estilo moderno, pela comodidade que 
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
            <button  className="button1">
            Ver mais
          </button>
          
              <Link to="/reserva" className="button2">Reservar</Link>
            </div>
          </div>

          </div>
          <div class="card">
          <div class="card-image">
            <img src="../Imagens/Quarto_Duplo--/quartoduplo2.jpg" alt="Suite Modern King Bed Room" />
          </div>
          <div class="card-content">
            <p className="roomtitle">Quarto Duplo</p>
            <p style={{fontFamily:'Belleza', color:'black', marginBottom:'10px'}}>Quarto apelativo pela comodidade que oferece
               e pela sua varanda individual com
                vistas deslumbrantes.
              
               <li>Área de quarto: 14m²</li>
               <li>Capacidade: 2 Pessoas</li>
               <li> Ar condicionado</li>
               <li> Pequeno-Almoço incluído</li>
               <li> Parque gratuito</li>
               <li>  TV LCD </li>
               <li> Internet Wi-Fi</li>
               </p>
            <div className="card-buttons">
            <button className="button1">
            Ver mais
          </button>
          
              <Link to="/reserva" className="button2">Reservar</Link>
            </div>
          </div>

          </div>

          <div class="card">
          <div class="card-image">
            <img src="../Imagens/Quarto_twin/camas.jpg" alt="Suite Modern King Bed Room" />
          </div>
          <div class="card-content">
            <p className="roomtitle">Quarto Twin</p>
            <p style={{fontFamily:'Belleza', color:'black', marginBottom:'10px'}}>Quarto apelativo pela comodidade que oferece. 
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
            <button className="button1">
            Ver mais
          </button>
          
          
              <Link to="/reserva" className="button2">Reservar</Link>
            </div>
          </div>

          </div>

          <div class="card">
          <div class="card-image">
            <img src="../Imagens/Suite_Familiar--/2quartos.jpg" alt="Suite Modern King Bed Room" />
          </div>
          <div class="card-content">
            <p className="roomtitle">Suite Familiar</p>
            <p style={{fontFamily:'Belleza', color:'black', marginBottom:'10px'}}>A decoração em tons de verde e branco
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
            <button className="button1">
            Ver mais
          </button>
          
              <Link to="/reserva" className="button2">Reservar</Link>
            </div>
          </div>

          </div>

          <div class="card" style={{ marginBottom:'3%' }} >
          <div class="card-image">
            <img src="../Imagens/Quarto_Solteiro/quarto_single.jpg" alt="Suite Modern King Bed Room" />
          </div>
          <div class="card-content">
            <p className="roomtitle">Quarto Solteiro</p>
            <p style={{fontFamily:'Belleza', color:'black', marginBottom:'10px'}}>Seja em trabalho ou numa aventura a solo, o quarto Single é a escolha perfeita para uma estada curta.
Este é um espaço único, pois associa materiais clássicos ao toque de contemporaneidade que se reflecte através das suas 
comodidades.
              
               <li>Área de quarto: 12m²</li>
               <li>Capacidade: 1 Pessoas</li>
               <li> Ar condicionado</li>
               <li> Pequeno-Almoço incluído</li>
               <li> Parque gratuito</li>
               <li> TV LCD </li>
               <li> Internet Wi-Fi</li>
               </p>
               <div className="card-buttons">
            <button className="button1">
            Ver mais
          </button>
         
              <Link to="/reserva" className="button2">Reservar</Link>
            </div>
          </div>

          </div>

          

       </div>

        </div>
    );
}
export default Reservas;