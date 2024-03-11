import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import '../../CSS/restaurante.css';

function Restaurante() {
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
      <table cellSpacing="50px" className='tablerest'>
        <tr className='bordas'>
          <div className='descquartos1'>
            <td><img className='imghotel-bar' src='../Imagens/IMGRESTAURANTE/hotel-in-geres-restaurant-new04.jpg' /><h4>Restaurante</h4><br></br></td>
          </div>
          <div className='descquartos2'>
            <td><img className='imghotel-bar' src='../Imagens/IMGBAR/poolbar2.jpg' /><h4>Bar</h4><br></br></td>
          </div>
        </tr>
      </table>
    </div>
  );
}
export default Restaurante;