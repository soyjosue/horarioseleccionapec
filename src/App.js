import './App.css';
import { useState } from 'react';
import { getDay, getHour, getPosgradoDay, getPosgradoHour } from './helper/Utils';

function App() {

  const [lastname, setLastname] = useState("");
  const [studentType, setStudentType] = useState("g");

  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [student, setStudent] = useState("");

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const onCLickConsult = () => {
    setShow(false);
    if (lastname.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    if (studentType !== 'p') {
      setDay(getDay(lastname));
      setHour(getHour(lastname));
    } else {
      setDay(getPosgradoDay());
      setHour(getPosgradoHour(lastname));
    }

    if(studentType === "t") {
      setStudent("Técnico")
    } else if(studentType === "g") {
      setStudent("Grado")
    } else {
      setStudent("Posgrado")
    }

    setShow(true);
  }

  const onChangeValue = (event) => {
    setStudentType(event.target.value);
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

        <div
          className="radioContent">
          <label>
            Técnico
            <input
              type="radio"
              value="t"
              checked={studentType === 't'}
              onChange={onChangeValue} />
          </label>

          <label>
            Grado
            <input
              type="radio"
              value="g"
              checked={studentType === 'g'}
              onChange={onChangeValue} />
          </label>

          <label>
            Posgrado
            <input
              type="radio"
              value="p"
              checked={studentType === 'p'}
              onChange={onChangeValue} />
          </label>
        </div>

        <button className="btnSend"
          onClick={onCLickConsult}>Consultar Horario</button>

        {show &&
          <div className="divResult">
            <h2>Estudiante de {student}</h2>

            <p>Tu selección es el dia: <b>{day}</b></p>
            <p>A la hora: <b>{hour}</b></p>
          </div>
        }

        {error &&
          <div className="errorDiv">
            <p>Por favor, colocar el primer apellido</p>
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
