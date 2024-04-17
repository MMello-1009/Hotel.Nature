import React, { useState, useEffect } from "react";

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
      const roomId = Object.keys(selectedRooms)[0]; // Get the first room ID
      const response = await fetch(`http://localhost:4000/precos/${roomId}`);

      if (!response.ok) {
        throw new Error('Erro ao verificar disponibilidade');
      }

      const data = await response.json();
      setQuartoPreco(data.preco); // Assuming price is in a 'price' property
    } catch (error) {
      console.error('Erro', error);
    }
  };

  

  const fetchPensaoPreco = async () => {
    try {
      
      const response = await fetch(`http://localhost:4000/pensao/${selectedPension}`);

      if (!response.ok) {
        throw new Error('Erro ao verificar disponibilidade');
      }

      const data = await response.json();
      setQuartoPreco(data.precoregime); // Assuming price is in a 'price' property
    } catch (error) {
      console.error('Erro', error);
    }
  };
  useEffect(() => {
    fetchQuartoPreco();
  }, [precoquarto]);
  
  
    
   // Call on component mount

  useEffect(() => {
    // Update total price whenever quartoPreco or noites changes
    setPrecoTotal(quartoPreco+pensaoPreco);
  }, [ quartoPreco+pensaoPreco]);



   
  return (
    <div>
      <h1>Resumo da Reserva</h1>
      <table>
        <tr>
          <td>
            <form>
              <h2>Dados do Cliente:</h2>
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />
              <br />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <br />
              <label htmlFor="phone">Telefone:</label>
              <input type="tel" id="phone" name="phone" required />
              <br />
              <label htmlFor="nacionalidade">Nacionalidade:</label>
              <select
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
              <label htmlFor="nif">NIF:</label>
              <input type="text" id="nif" name="nif" />
              <button type="submit">Reservar</button>
            </form>
          </td>
          <td>
            <p>Detalhes da reserva:</p>
            <p>Check-in: {startDate.toLocaleDateString()} </p>
            <p>Check-out: {endDate.toLocaleDateString()} </p>
            <p>
              Quartos reservados:{" "}
              {Object.entries(selectedRooms).map(([roomId, count], index) => (
                <span key={index}>
                  {count} Quarto{count > 1 ? "s" : ""} de tipo {roomId}
                  {index < Object.entries(selectedRooms).length - 1 && ", "}
                </span>
              ))}
            </p>
            <p>Pensão: {selectedPension}</p>
            <p>Preço total: €{precoTotal}</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Resumo;
