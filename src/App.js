import './App.css';
import { useState } from 'react';
import { getDay, getHour } from './helper/Utils';

function App() {

  const [lastname, setLastname] = useState("");

  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");

  const onCLickConsult = () => {
    setDay(getDay(lastname));
    setHour(getHour(lastname));
  }

  return (
    <div className="App">


      <div>
        <h1>Mira tu horario se la selección</h1>

        <label 
          htmlFor="lastName"
          className="labelLastname">1er. Apellido:</label>

        <input id="lastName" placeholder="Tu apellido"
          onChange={e => setLastname(e.target.value)} />
        
        <button className="btnSend"
         onClick={onCLickConsult}>Consultar</button>
      </div>

      <div>
        <p>Tu selección es el dia: { day }</p>
        <p>A la hora: { hour }</p>
      </div>
    </div>
  );
}

export default App;
