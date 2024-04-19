import React, { useState, useEffect } from "react";
import '../../../CSS/resumo.css';
function Resumo() {
  const urlParams = new URLSearchParams(window.location.search);
  const startDate = new Date(urlParams.get('startDate'));
  const endDate = new Date(urlParams.get('endDate'));
  const selectedRooms = JSON.parse(urlParams.get('selectedRooms'));
  const selectedPension = urlParams.get('selectedPension');
  const [nacionalidades, setNacionalidades] = useState([]);
  const [selectedNacionalidade, setSelectedNacionalidade] = useState("");
  const [quartoPreco, setQuartoPreco] = useState(0);
  const [pensaoPreco, setPensaoPreco] = useState(0);
  const [precoTotal, setPrecoTotal] = useState(0);
  const noites = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const [precoquarto, setPrecoQuarto] = useState(0);
  const [precopensao, setPrecoPensao] = useState(0);
  const [roomTitle, setRoomTitle] = useState("");

  const nomepensao = [
    { selectedPension: "alojamento", title: "Alojamento" },
    { selectedPension: "meia-pensao", title: "Meia Pensão" },
    { selectedPension: "pensao-completa", title: "Pensão Completa" }
  ];

  const quartoNomes = [
    { Id_tipo: 1, title: "Suite" },
    { Id_tipo: 2, title: "Duplo" },
    { Id_tipo: 3, title: "Twin" },
    { Id_tipo: 4, title: "Suite Familiar" },
    { Id_tipo: 5, title: "Solteiro" }
  ];

  const getRoomTitle = (roomId) => {
    // Find the room title in quartoNomes based on roomId
    const roomTitle = quartoNomes.find(room => room.Id_tipo === roomId)?.title;
    return roomTitle || `Quarto desconhecido (ID: ${roomId})`; // Handle missing room titles
  };
  useEffect(() => {
    // Update room title whenever selectedRooms change
    const roomIds = Object.keys(selectedRooms);
    if (roomIds.length > 0) {
      const roomId = roomIds[0]; // For simplicity, assuming only one room is selected
      const title = getRoomTitle(parseInt(roomId)); // Ensure roomId is converted to integer
      setRoomTitle(title);
    }
  }, [selectedRooms]);
  

  
  useEffect(() => {
    const fetchNacionalidades = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Erro ao buscar as nacionalidades");
        }
        const data = await response.json();
        const nacionalidadesList = data.map((pais) => pais.name.common);
        setNacionalidades(nacionalidadesList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNacionalidades();
  }, []);



  const fetchQuartoPreco = async () => {
    try {
      const roomIds = Object.keys(selectedRooms); // Get all room IDs
      const response = await Promise.all(roomIds.map(roomId => fetch(`http://localhost:4000/precos/${roomId}`)));

      const roomPrices = await Promise.all(response.map(res => res.json()));
      const totalPrice = roomPrices.reduce((acc, curr, index) => {
        const roomCount = Object.values(selectedRooms)[index];
        return acc + (curr.preco * roomCount);
      }, 0);

      setQuartoPreco(totalPrice);
    } catch (error) {
      console.error('Erro', error);
    }
  };
  useEffect(() => {
    fetchQuartoPreco();
  }, [selectedRooms]);

  const fetchPensaoPreco = async () => {
    try {
      const response = await fetch(`http://localhost:4000/pensao/${selectedPension}`);



      if (!response.ok) {
        throw new Error('Erro ao verificar disponibilidade');
      }

      const data = await response.json();
      setPensaoPreco(data); // Assuming price is in a 'price' property

    } catch (error) {
      console.error('Erro', error);
    }
  };
  useEffect(() => {
    fetchPensaoPreco();
  }, [selectedPension]);

  useEffect(() => {
    // Update total price whenever quartoPreco or pensaoPreco changes
    setPrecoTotal((quartoPreco + pensaoPreco) * noites);
  }, [quartoPreco, pensaoPreco]);



  return (
    <div className="resumocss">
      <h1>Resumo da Reserva</h1>
      <table style={{alignContent:'center', width:'100%'}}>
        <tr>
          <td style={{alignContent:'center', width:'50%'}}>
            <form>
              <h2>Dados do Cliente:</h2>
              <label htmlFor="name" className="lblreserva">Nome:</label>
              <br></br>
              <input type="text" id="name" name="name" className="inputreserva" required />
              <br></br><br></br>
              <label htmlFor="email" className="lblreserva">Email:</label>
              <br></br>
              <input type="email" id="email" name="email" className="inputreserva" required />
              <br></br><br></br>
              <label htmlFor="phone" className="lblreserva">Telefone:</label>
              <br></br>
              <input type="tel" id="phone" name="phone" className="inputreserva" required />
              <br></br><br></br>
              <label htmlFor="nacionalidade" className="lblreserva">Nacionalidade:</label>
              <br></br>
              <select className="inputreserva"
                id="nacionalidade"
                value={selectedNacionalidade}
                onChange={(e) => setSelectedNacionalidade(e.target.value)}
                required
              >
                <option value="">Selecione...</option>
                {nacionalidades.map((nacionalidade, index) => (
                  <option key={index} value={nacionalidade}>
                    {nacionalidade}
                  </option>
                ))}
              </select>
              <br></br><br></br>
              <label htmlFor="nif" className="lblreserva">NIF:</label>
              <br></br>
              <input type="text" id="nif" name="nif" className="inputreserva" />
              <br></br>
              <br></br>
              <button type="submit" className="button1reserva">Reservar</button>
            </form>
          </td>
          <td style={{alignContent:'center', width:'35%'}}>
            <div className="divresumo">
              <p>Detalhes da reserva:</p>
              <p>Check-in: {startDate.toLocaleDateString()} </p>
              <p>Check-out: {endDate.toLocaleDateString()} </p>
              <p>
                Quartos reservados:{" "}
                {Object.entries(selectedRooms).map(([roomId, count], index) => (
                  <span key={index}>
                    {count} Quarto{count > 1 ? "s" : ""}  {roomTitle}

                    {index < Object.entries(selectedRooms).length - 1 && ", "}
                  </span>
                ))}
              </p>
              <p>Pensão: {nomepensao.find(item => item.selectedPension === selectedPension)?.title}</p>
              <p>Preço total: €{precoTotal}</p>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Resumo;
