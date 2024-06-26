import './CSS/App.css';
import Homepage from './components/home';
import Hotel from './components/paginas/hotel';
import Restaurante from './components/paginas/restaurante';
import Quartos from './components/paginas/quartos';
import Geres from './components/paginas/geres';
import FactSheet from './components/paginas/factsheet';
import Programas from './components/paginas/programas';
import Contactos from './components/paginas/contactos';
import Reservas from './components/paginas/reservas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Master from './components/MasterLayouts';
import Adicionais from "./components/paginas/resumoreserva/adicionais";
import Resumo from "./components/paginas/resumoreserva/resumo";
import FaturaReserva from "./components/paginas/resumoreserva/faturaReserva";


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
          <Route path="/reserva" element={<Reservas />} />
          <Route path="/adicionais" element={<Adicionais />} />
          <Route path="/resumo" element={<Resumo />} />
          <Route path="/fatura" element={<FaturaReserva />} />
        </Routes>
      </Master>
    </Router>
  );
}

export default App;
