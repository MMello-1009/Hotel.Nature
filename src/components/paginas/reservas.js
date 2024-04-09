import React, { useState } from "react";
import '../../CSS/reservas.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

function Reservas() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedRooms, setSelectedRooms] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [warning, setWarning] = useState(false);
  const [price,setPrice] = useState(false);

  const cards = [
    { id: 1, title: "Suite", value: 100, area: "50m²", capacity: "2 Pessoas", bedType: "Cama King Size", amenities: ["Ar condicionado", "Pequeno-Almoço incluído", "Parque gratuito", "TV LCD", "Internet Wi-Fi"] },
    { id: 2, title: "Quarto Duplo", value: 150, area: "25m²", capacity: "2 Pessoas", bedType: "Cama de Casal", amenities: ["Ar condicionado", "Pequeno-Almoço incluído", "Parque gratuito", "TV LCD", "Internet Wi-Fi"] },
    { id: 3, title: "Quarto Twin", value: 200, area: "30m²", capacity: "2 Pessoas", bedType: "2 Camas Individuais", amenities: ["Ar condicionado", "Pequeno-Almoço incluído", "Parque gratuito", "TV LCD", "Internet Wi-Fi"] },
    { id: 4, title: "Suite Familiar", value: 250, area: "60m²", capacity: "4 Pessoas", bedType: "Cama King Size e 2 Camas de Solteiro", amenities: ["Ar condicionado", "Pequeno-Almoço incluído", "Parque gratuito", "TV LCD", "Internet Wi-Fi"] },
    { id: 5, title: "Quarto Solteiro", value: 120, area: "18m²", capacity: "1 Pessoa", bedType: "Cama de Solteiro", amenities: ["Ar condicionado", "Pequeno-Almoço incluído", "Parque gratuito", "TV LCD", "Internet Wi-Fi"] }
  ];

  const handleReserve = (roomId, value) => {
    const newCount = (selectedRooms[roomId] || 0) + value;
    const totalRoomsCount = Object.values(selectedRooms).reduce((acc, count) => acc + count, 0);
    if (totalRoomsCount + value <= 5 && newCount >= 0) {
      const updatedRooms = { ...selectedRooms, [roomId]: newCount };
      setSelectedRooms(updatedRooms);
      updateTotalPrice(updatedRooms);
      setWarning(false);
      setPrice(true);
    } else {
      setWarning(true);
    }
    if(totalRoomsCount+value==0)
    setPrice(false);
  };

  const updateTotalPrice = (updatedRooms) => {
    const total = Object.entries(updatedRooms).reduce((acc, [roomId, count]) => {
      const room = cards.find(card => card.id.toString() === roomId);
      if (room) {
        return acc + count * room.value;
      }
      return acc;
    }, 0);
    setTotalPrice(total);
  };

  const handleIncrease = (roomId) => {
    handleReserve(roomId, 1);
  };

  const handleDecrease = (roomId) => {
    handleReserve(roomId, -1);
  };

  return (
    <div className="reservas-container">
      <div className="disponibilidade">
        <table>
          <td>
            <div className="divcheckin">
              <p className="textoalt">Check In</p>
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
              <p className="textoalt">Check Out</p>
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

      <div className="reservas-cards">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div className="card-image">
              <img src={`../Imagens/${card.title.replace(/\s+/g, "_").toLowerCase()}--/${card.title.replace(/\s+/g, "").toLowerCase()}1.jpg`} alt={card.title} />
            </div>
            <div className="card-content">
              <p className="roomtitle">{card.title}</p>
              <p><strong>Área do quarto:</strong> {card.area}</p>
              <p><strong>Capacidade:</strong> {card.capacity}</p>
              <p><strong>Tipo de cama:</strong> {card.bedType}</p>
              <p><strong>Comodidades:</strong></p>
              <ul>
                {card.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
              <p className="pricetag"><strong>Preço por noite: </strong> {card.value}€</p>
              <div className="card-buttons">
                {selectedRooms[card.id] === undefined || selectedRooms[card.id] === 0 ? (
                  <button className="button1" onClick={() => handleReserve(card.id, 1)}>
                    Reservar
                  </button>
                ) : (
                  <div className="contador">
                    
                          <button  onClick={() => handleIncrease(card.id)}>
                            +
                          </button>
                       
                          <span >{selectedRooms[card.id]}</span>
                       
                          <button  onClick={() => handleDecrease(card.id)}>
                            -
                          </button>
                        
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {warning && (
        <div className="warning">
          A soma dos contadores não pode exceder 5.
        </div>
      )}

      {price &&(
      <div className="tray">
        <table>
          <tr>
            <td>
            <h2>Total Preço: {totalPrice}€</h2>
            </td>
            <td>
            <button className="reservarbtn">Reservar</button>
            </td>
          </tr>
        </table>
      </div>)}
      
    </div>
  );
}

export default Reservas;
