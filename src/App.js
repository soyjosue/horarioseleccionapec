import './App.css';
import { useState } from 'react';
import { getDay, getHour } from './helper/Utils';

function App() {

  const [lastname, setLastname] = useState("");

  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");

  const [show, setShow] = useState(false);

  const onCLickConsult = () => {
    setShow(false);
    setDay(getDay(lastname));
    setHour(getHour(lastname));
    setShow(true);
  }

  return (
    <div className="App">


      <div className="contentForm">
        <h1> Horario de Selección</h1>

        <label
          htmlFor="lastName"
          className="labelLastname">1er. Apellido:</label>

        <input
          id="lastName"
          placeholder="Tu apellido"
          onChange={e => setLastname(e.target.value)}
          className="lasnameInput" />

        <button className="btnSend"
          onClick={onCLickConsult}>Consultar Horario</button>

        {show &&
          <div className="divResult">
          <p>Tu selección es el dia: <b>{day}</b></p>
          <p>A la hora: <b>{hour}</b></p>
        </div>
        }

        <div className="footer">
          <p>By Elvis Inoa :)</p>
          <a href="https://github.com/soyjosue">Github</a>
        </div>
      </div>
    </div>
  );
}

export default App;
