import React from 'react';
import '../CSS/home.css';
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
   return (
      <div className="homepage">
         <div className="head-text">
            <div>
               <img className="homeimg" src='../Imagens/Hotel_por_fora/imghome.jpg' />
            </div>
            <div className='text-on-image'>
               <h1>Relax, Recharge & Reconnect with Nature</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
         </div>
         <h1 className='textquartos'>Quartos</h1>
         <table cellSpacing="50px" className='tablequartos'>
            <tr>
               <div className='descquartos'>
                  <td><img className='imgquartos' src='../Imagens/Suite--/suite3.jpg' /><h4>Suite</h4><br></br><p className='textdesc'>Suite privada,com 50m² e uma cama de casal extragrande. Televisão de ecrã plano, casa de banho privativa com todos os produtos de higiene gratuitos, ar condicionado, insonorização, Wi-Fi gratuito, máquina de café e minibar. Com uma varanda sobre a majestosa Serra do Gerês.</p></td>

                  <td><img className='imgquartos' src='../Imagens/Suite_Familiar--/2quartos.jpg' /><h4>Suite Familiar</h4><br></br><p className='textdesc'>Suite Familiar privada, com 60m², 2 quartos com 25m² com 2 camas de solteiro. Televisão de ecrã plano, casa de banho privativa com todos os produtos de higiene gratuitos, ar condicionado, insonorização, Wi-Fi gratuito, máquina de café e minibar. Com uma varanda sobre a majestosa Serra do Gerês.</p></td>

                  <td><img className='imgquartos' src='../Imagens/Quarto_Duplo--/quartoduplo3.jpg' /><h4>Quarto Duplo</h4><br></br><p className='textdesc'>Quarto rústico com 25m², com 1 cama de casal. Televisão, casa de banho privativa com todos os produtos de higiene gratuitos, ar condicionado, insonorização, Wi-Fi gratuito, máquina de café. Com uma varanda sobre a majestosa Serra do Gerês.</p><br></br></td>
               </div>
            </tr>
         </table>
         <div className='botaocontainer'>
            <Link to="/quartos"
               className="botaoquartos">
               Mais Quartos
            </Link>
         </div>
         <h1 className='textserv'>Facilidades e Serviços</h1>

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
   );
};

export default Homepage;
