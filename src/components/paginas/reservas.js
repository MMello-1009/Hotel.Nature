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
                <br></br>
                <p>Check In - Check Out</p>
                <DatePicker className="checkin"
                    selectsStart
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    startDate={startDate}
  
                />
                <DatePicker className="checkin"
                    selectsEnd
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    endDate={endDate}
                    startDate={startDate}
                    minDate={startDate}
                />
                <button className="botao-disponibilidade"></button>
                <br></br><br></br>
            </div>

        </div>
    );
}
export default Reservas;