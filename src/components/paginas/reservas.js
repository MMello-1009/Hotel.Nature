import React, { useState} from "react";
import '../../CSS/reservas.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function Reservas() {

    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    
    
 
    return (
        <div className="reservas">
            <div className="disponibilidade">
                <table>
                    <td>
                <div className="divcheckin">
                    <p>Check In</p>
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
                <p>Check In</p>
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

        </div>
    );
}
export default Reservas;