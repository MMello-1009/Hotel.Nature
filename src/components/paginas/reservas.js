import React, { useState } from "react";
import '../../CSS/reservas.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { format } from 'date-fns';



function Reservas() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedRooms, setSelectedRooms] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [warning, setWarning] = useState(false);
  const [price, setPrice] = useState(false);
  const [availableRooms, setAvailableRooms] = useState([]);
  const today = new Date();
  const minEndDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000); // Adiciona um dia à startDate
  const initialEndDate = new Date(startDate.getTime() + 2 * 24 * 60 * 60 * 1000); // Adiciona dois dias à startDate (como exemplo)

  const cards = [
    { Id_tipo: 1, title: "Suite", value: 625, area: "50m²", capacity: "2 Pessoas", bedType: "Cama King Size", amenities: ["Ar condicionado", "Pequeno-Almoço incluído", "Parque gratuito", "TV LCD", "Internet Wi-Fi"] },
    { Id_tipo: 2, title: "Quarto Duplo", value: 390, area: "25m²", capacity: "2 Pessoas", bedType: "Cama de Casal", amenities: ["Ar condicionado", "Pequeno-Almoço incluído", "Parque gratuito", "TV LCD", "Internet Wi-Fi"] },
    { Id_tipo: 3, title: "Quarto Twin", value: 450, area: "30m²", capacity: "2 Pessoas", bedType: "2 Camas Individuais", amenities: ["Ar condicionado", "Pequeno-Almoço incluído", "Parque gratuito", "TV LCD", "Internet Wi-Fi"] },
    { Id_tipo: 4, title: "Suite Familiar", value: 600, area: "60m²", capacity: "4 Pessoas", bedType: "Cama King Size e 2 Camas de Solteiro", amenities: ["Ar condicionado", "Pequeno-Almoço incluído", "Parque gratuito", "TV LCD", "Internet Wi-Fi"] },
    { Id_tipo: 5, title: "Quarto Solteiro", value: 300, area: "18m²", capacity: "1 Pessoa", bedType: "Cama de Solteiro", amenities: ["Ar condicionado", "Pequeno-Almoço incluído", "Parque gratuito", "TV LCD", "Internet Wi-Fi"] }
  ];


  const handleFinalizar = async () => {
    try {
      const formattedStartDate = format(startDate, 'yyyy/MM/dd');
      const formattedEndDate = format(endDate, 'yyyy/MM/dd');

      console.log("Detalhes da reserva:", formattedStartDate, formattedEndDate, selectedRooms);
      // Resetar o estado após a reserva

      setSelectedRooms({});
      setTotalPrice(0);
      setWarning(false);
      setPrice(false);
      // Redirecionar o usuário para a página de adicionais

    } catch (error) {
      console.error("Erro ao fazer reserva:", error);
      // Tratar erros de reserva, se necessário
    }
  };
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
    if (totalRoomsCount + value === 0)
      setPrice(false);
  };

  const Availability = async () => {
    try {
      const formattedStartDate = startDate.toISOString().split('T')[0];
      const formattedEndDate = endDate.toISOString().split('T')[0];
      const response = await fetch(`http://localhost:4000/availability?startDate=${formattedStartDate}&endDate=${formattedEndDate}`);

      if (!response.ok) {
        throw new Error('Erro ao verificar disponibilidade');
      }
      if (formattedStartDate === formattedEndDate) { // Aqui está a verificação
        throw new Error('Check-in e Check-out não podem ser iguais');
      }

      const data = await response.json();
      if (data && data.availableRooms) {
        const availableRoomIds = data.availableRooms.map(cards => cards.Id_tipo);
        setAvailableRooms(availableRoomIds);
      } else {
        setAvailableRooms([]);
      }
    } catch (error) {
      console.error('Erro', error);
    }
  };

  const updateTotalPrice = (updatedRooms) => {
    const total = Object.entries(updatedRooms).reduce((acc, [roomId, count]) => {
      const room = cards.find(card => card.Id_tipo.toString() === roomId);
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
              <label htmlFor="checkin" className="textoalt">Check In</label>
              <DatePicker
                id="checkin"
                className="checkin"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                minDate={today}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </td>
          <td>
            <div className="divcheckout">
              <p className="textoalt">Check Out</p>
              <DatePicker
                id="checkout"
                className="checkin"
                selected={endDate}
                onChange={(date) => {
                  if (date.getTime() < startDate.getTime()) {
                    setEndDate(initialEndDate);
                  } else {
                    setEndDate(date);
                  }
                }}
                startDate={new Date(startDate.getTime() + 23 * 60 * 60 * 1000)}
                endDate={endDate}
                selectsEnd
                minDate={minEndDate}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </td>
          <td >
            <button type="button" className="verificarbutton" onClick={Availability} >Verificar disponibilidade</button>
          </td>
        </table>
      </div>

      <div className="reservas-cards">
        {cards.map(cards => {
          if (availableRooms.includes(cards.Id_tipo)) {
            return (
              <div className="card" key={cards.Id_tipo}>
                <div className="card-image">
                  {cards && cards.title && (
                    <img src={`../Imagens/${cards.title.replace(/\s+/g, "_").toLowerCase()}--/${cards.title.replace(/\s+/g, "").toLowerCase()}1.jpg`} alt={cards.title} />
                  )}
                </div>
                <div className="card-content">
                  <p className="roomtitle">{cards.title}</p>
                  <p><strong>Área do quarto:</strong> {cards.area}</p>
                  <p><strong>Capacidade:</strong> {cards.capacity}</p>
                  <p><strong>Tipo de cama:</strong> {cards.bedType}</p>
                  <p><strong>Comodidades:</strong></p>
                  <ul>
                    {cards.amenities && Array.isArray(cards.amenities) && cards.amenities.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                  <p className="pricetag"><strong>Preço por noite: </strong> {cards.value}€</p>
                  <div className="card-buttons">
                    {selectedRooms[cards.Id_tipo] === undefined || selectedRooms[cards.Id_tipo] === 0 ? (
                      <button className="button1" onClick={() => handleReserve(cards.Id_tipo, 1)}>
                        Reservar
                      </button>
                    ) : (
                      <div className="contador">
                        <button onClick={() => handleIncrease(cards.Id_tipo)}>+</button>
                        <span>{selectedRooms[cards.Id_tipo]}</span>
                        <button onClick={() => handleDecrease(cards.Id_tipo)}>-</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {warning && (
        <div>
          A soma dos contadores não pode exceder 5.
        </div>
      )}

      {price && (
        <div className="tray">
          <table>
            <tr>
              <td>
                <h2>Total Preço: {totalPrice}€</h2>
              </td>
              <td>
                <a href={`/adicionais?startDate=${format(startDate, 'yyyy-MM-dd')}&endDate=${format(endDate, 'yyyy-MM-dd')}&selectedRooms=${JSON.stringify(selectedRooms)}`} className="button1" onClick={handleFinalizar}>
                  Finalizar a reserva
                </a>
              </td>
            </tr>
          </table>
        </div>
      )}

    </div>
  );
}



export default Reservas;
