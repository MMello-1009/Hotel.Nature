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
<<<<<<< HEAD
                <div className="disponibilidade">
                    <h4>dasdasda</h4>
                    <input type="text">Check in</input>
                </div>
=======
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

>>>>>>> 29c831b80f18a2b573dc0444f193e6d4a0c949d6
        </div>
    );
}
export default Reservas;