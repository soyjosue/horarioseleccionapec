import { useState } from "react";
import firebase from 'firebase';

import { useHistory } from 'react-router-dom';

const LateSelection = () => {
    const db = firebase.firestore();

    const [carrer, setCarrer] = useState('');
    const [lastname, setLastname] = useState('');

    const [hour, setHour] = useState("");

    const [isVisibleInput, setIsVisibleInput] = useState(false);

    const [error, setError] = useState(false);
    const [errorCarrer, setErrorCarrer] = useState(false);
    const [show, setShow] = useState(false);

    const history = useHistory();

    const onChange = e => {
        setError(false);
        setErrorCarrer(false);
        setShow(false);
        var value = e.target.value;

        if (value === 'negocios')
            setIsVisibleInput(true);
        else
            setIsVisibleInput(false);

        setCarrer(value);
    }

    const onCLickConsult = () => {
        setError(false);
        setErrorCarrer(false);
        setShow(false);

        if (carrer === 'negocios' && lastname.trim() === '') {
            setError(true);
            return;
        }

        const student = {carrer, lastname};

        setShow(true);
        switch (carrer) {
            case 'posgrado':
                setHour('1:20 PM');
                student.hour = '1:20 PM'
                break;
            case 'derecho':
            case 'finanzas':
            case 'financiero':
                setHour('8:20 AM');
                student.hour = '8:20 AM'
                break;
            case 'contabilidad':
            case 'sistemasinformacion':
            case 'interiores':
                setHour('8:40 AM');
                student.hour = '8:40 AM'
                break;
            case 'grafico':
            case 'cine':
            case 'ingles':
                setHour('9:00 AM');
                student.hour = '9:00 AM'
                break;
            case 'mercadotecnica':
                setHour('9:20 AM');
                student.hour = '9:20 AM'
                break;
            case 'industrial':
                setHour('9:40 AM');
                student.hour = '9:40 AM'
                break;
            case 'eletrica':
            case 'electronica':
            case 'comunicacion':
                setHour('10:00 AM');
                student.hour = '10:00 AM'
                break;
            case 'administracion':
                setHour('10:20 AM');
                student.hour = '10:20 AM'
                break;
            case 'sistema':
                setHour('10:40 AM');
                student.hour = '10:40 AM'
                break;
            case 'software':
                setHour('11:00 AM');
                student.hour = '11:00 AM'
                break;
            case 'publicidad':
                setHour('11:20 AM');
                student.hour = '11:20 AM'
                break;
            case 'turismo':
                setHour('11:40 AM');
                student.hour = '11:40 AM'
                break;
            case 'negocios':
                let las = lastname.toUpperCase().substr(0, 2);
                if (las >= 'A' && las <= 'DUZ') {
                    setHour('12:00 PM')
                    student.hour = '12:00 PM'
                } else if (las >= 'E' && las <= 'MEJ') {
                    setHour('12:20 PM')
                    student.hour = '12:20 PM'
                } else if (las >= 'MEL' && las <= 'RUZ') {
                    setHour('12:40 PM')
                    student.hour = '12:40 PM'
                } else if (las >= 'S' && las <= 'ZUL') {
                    setHour('1:00 PM')
                    student.hour = '1:00 PM'
                }
                break;
            default:
                setErrorCarrer(true);
                setShow(false);
                break;
        }

        if(!errorCarrer) {
            student.date = Date.now();
            db.collection('late').add(student);
        }
    }

    return (
        <div className="App">


            <div className="contentForm">
                <h1>Selección Tardía</h1>

                <label
                    htmlFor="carrers"
                    className="labelLastname">Carrera:</label>

                <select
                    id="carrers"
                    className="selectCareer"
                    onChange={onChange}>
                    <option value="">-- Seleccionar carrera --</option>
                    <option value="posgrado">Posgrado</option>
                    <option value="derecho">Licenciatura en Derecho</option>
                    <option value="finanzas">Licenciatura en Finanzas</option>
                    <option value="financiero">Técnico Analista Financiero</option>
                    <option value="contabilidad">Licenciatura en Contabilidad</option>
                    <option value="sistemasinformacion">Ingeniería de Sistemas de Información</option>
                    <option value="interiores">Licenciatura en Diseño de Interiores</option>
                    <option value="grafico">Licenciatura en Diseño Gráfico</option>
                    <option value="cine">Licenciatura en Cinematografía</option>
                    <option value="ingles">Licenciatura en Inglés orientada a la Enseñanza</option>
                    <option value="mercadotecnica">Licenciatura en Mercadotecnia</option>
                    <option value="industrial">Ingeniería Industrial</option>
                    <option value="eletrica">Ingeniería Eléctrica</option>
                    <option value="electronica">Ingeniería Electrónica</option>
                    <option value="comunicacion">Licenciatura en Comunicación Digital</option>
                    <option value="administracion">Licenciatura en Administración de Empresas</option>
                    <option value="sistema">Ingeniería de Sistemas de Computación</option>
                    <option value="software">Ingeniería de Software</option>
                    <option value="publicidad">Licenciatura en Publicidad</option>
                    <option value="turismo">Licenciatura en Administración Turística y Hotelera</option>
                    <option value="negocios">Licenciatura en Negocios Internacionales</option>
                </select>

                {isVisibleInput && (
                    <>
                        <label
                            htmlFor="lastName"
                            className="labelLastname">1er. Apellido:</label>

                        <input
                            id="lastName"
                            placeholder="Tu primer apellido"
                            className="lasnameInput"
                            onChange={e => setLastname(e.target.value)} />
                    </>


                )}

                <button
                    className="btnSend"
                    onClick={onCLickConsult}>Consultar Horario</button>

                <button 
                    className="btnSend red"
                    onClick={() => history.push('/')}>Volver</button>

                {show && (

                    <div className="divResult">
                        <p>Tu selección es el dia: <b>Jueves 02</b></p>
                        <p>A la hora: <b>{hour}</b></p>
                    </div>

                )}

                {error &&
                    <div className="errorDiv">
                        <p>Por favor, colocar el apellido</p>
                    </div>
                }
                {errorCarrer &&
                    <div className="errorDiv">
                        <p>Por favor, colocar la carrera</p>
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

export default LateSelection;