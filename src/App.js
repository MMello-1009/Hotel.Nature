import './CSS/App.css';
import Homepage from './components/home';
import Hotel from './components/paginas/hotel';
import Restaurante from './components/paginas/restaurante';
import Quartos from './components/paginas/quartos';
import Geres from './components/paginas/geres';
import FactSheet from './components/paginas/factsheet';
import Programas from './components/paginas/programas';
import Contactos from './components/paginas/contactos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Master from './components/MasterLayouts';


function App() {
  return (
    <Router>
      <Master>
        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/quartos" element={<Quartos />} />
          <Route path="/restaurante" element={<Restaurante />} />
          <Route path="/factsheet" element={<FactSheet />} />
          <Route path="/programas" element={<Programas />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/geres" element={<Geres />} />
        </Routes>
      </Master>
    </Router>
  );
}

export default App;
