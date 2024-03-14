import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/nav.css';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" style={{ backgroundColor: '#fff' }}>
      <Link to="/" className="nav-logo">
        <a><img src='/logo_hotel.png'/></a>
      </Link>
     
      
      <ul className={open ? 'nav-links active' : 'nav-links'}>
      
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/hotel" className="nav-link" onClick={() => setOpen(false)}>
            Hotel
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/quartos" className="nav-link" onClick={() => setOpen(false)}>
            Quartos
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/restaurante"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Restaurante
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/factsheet"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            FactSheet
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/programas"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Programas
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/geres" className="nav-link" onClick={() => setOpen(false)}>
            Gerês
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contactos"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Contacte-nos
          </Link>
        </li>
        
        
        <li className="nav-item">
          <Link
          to="/reserva"
          className="nav-button"
           onClick={() => setOpen(false)}
          >
            Reserve já
          </Link>
        </li>
        
      </ul>
      
    </nav>
    
  );
};

export default Navbar;
