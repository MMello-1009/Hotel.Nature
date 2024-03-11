import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../CSS/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='divfooter'>
        <table>
          <tr>
        <div className="footer-top">
         <td><div className="footer-left">
            <p>
              REAL NATURE HOTEL & SPA<br />
              Av. Manuel Francisco da Costa 54, Gerês, 4845-067 Portugal<br />
            </p>
          </div></td>

          <td><div className="footer-logo">
            <img src="/imgfooter.png" alt="REAL NATURE" />
          </div></td>
          
          

          <td>
          <div className="footer-right">
            <p>
            email:hotel@real.natura.pt
            <br></br>
            telemovel:+351 253 682 396
            </p>
            
          </div>
          </td>
          </div>
          </tr>
        <tr className="footer-bottom">
          <td>
            <div>
            <p>
              <a href="#">Política de Privacidade</a> | <a href="#">Termos e Condições</a> | &copy; 2024 HP Lda. Todos os direitos reservados. | Desenvolvido por <a href="#">Hotéis de Portugal Lda.</a>
            </p>
            
            
            </div>
          </td>
        </tr>
        </table>
      </div>
    </footer>
  );
};

export default Footer;