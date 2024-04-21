import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/nav.css'; // Assuming the CSS file is in the same directory
import LoginPopup from './paginas/login';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open); // Toggle the 'open' state on button click

  };

  return (
    <nav className="navbar" style={{ backgroundColor: '#fff', width: '100%' }}>
      <Link to="/" className="nav-logo">
        <a><img src='/logo_hotel.png' /></a>
      </Link>

      <ul className={`nav-links ${open ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/hotel" className="nav-link" onClick={handleClick}>
            Hotel
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/quartos" className="nav-link" onClick={handleClick}>
            Quartos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/restaurante" className="nav-link" onClick={handleClick}>
            Restaurante
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/factsheet" className="nav-link" onClick={handleClick}>
            FactSheet
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/programas" className="nav-link" onClick={handleClick}>
            Programas
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/geres" className="nav-link" onClick={handleClick}>
            Gerês
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contactos" className="nav-link" onClick={handleClick}>
            Contacte-nos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/reserva" className="nav-link"> {/* Remove redundant onClick */}
            <button className="nav-button" onClick={handleClick}>
              Reserve já
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <LoginPopup/>
        </li>
      </ul>


      <button className="menu-toggle" onClick={handleClick}>
        <img src='..\Imagens\infoquartosicon\bars-filter.svg' className='iconnav' /></button>
    </nav>
  );
};

/*<Link to='/'  className="nav-link">
<button className="nav-login" onClick={handleClick}>
Login
</button>
</Link>*/

export default Navbar;
