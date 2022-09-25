import { useState } from 'react';
import Opcion from './Opcion';
import Resultado from './Resultado';
import '../css/game.css';

export default function Juego() {
    const [eleccionJugador, setEleccionJugador] = useState({}); // Variable que guarda el ESTADO de cada Jugador
    /** setEleccionJugador es la FUNCION a llamar para cambiar el valor de este ESTADO. 
     * Este elemento es el que guarda el valor del estado.
     * EN ESTE CASO SERA UN SECCION DE LA LISTA (osea la eleccion y derrota) */

    const [eleccionCpu, setEleccionCpu] = useState({});

    //Array con posibles opciones A LA HORA DE ELEGIR esto facilita a la hora de determinar quien a ganado    
    const opciones = [
        {
            eleccion: "piedra",
            derrota: "tijera"
        },
        {
            eleccion: "papel",
            derrota: "piedra"
        },
        {
            eleccion: "tijera",
            derrota: "papel"
        }
    ]

    // Para EJECUTAR esta funcion tenemos que pasar esta funcion como PROP al componente OPCION >(###)
    const elegirOpcion = (event) => {
        const jugador = opciones.find(e => e.eleccion === event.target.textContent); // Con esto encontraremos el objeto que eligio el jugador dentro del ARRAY
        /** El primer elemento del array cuyo parametro "e.eleccion"
         *  es = al "textContent" debes devolvermelo */
        setEleccionJugador(jugador);
        eleccionCPU(); // Se llama a este evento para que al momento de que el jugador haga su eleccion la cpu tambien lo haga
    }

    const eleccionCPU = () => {
        const eleccion = opciones[Math.floor(Math.random() * 2)]
        setEleccionCpu(eleccion);
    }

    return (
        <main className="main__conteiner-game">
            <h2 className='h2__title'>Piedra Papel o Tijeras</h2>
            <section className='section__game'>
                <section className="section__player">
                    <h2 className="section__player__h2">Jugador</h2>
                    <div>
                        <img src='../img/flork_player-trans.png' alt='logo jugador'></img>
                    </div>
                    <div className="section__player__choice">
                        <h3 className='section__player__choice-h3'>Elección: </h3>
                        {eleccionJugador.eleccion}
                    </div>
                </section>
                <section className='section__gameplay'>
                    <div className="gameplay__div-result">
                        <Resultado jugador={eleccionJugador} maquina={eleccionCpu} />
                    </div>
                    <div className="gameplay__div-choices">
                        {
                            opciones.map((e, index) => <Opcion
                                key={index}
                                elegir={elegirOpcion}
                                valor={opciones[index]} />)
                        }
                    </div>
                    <div className='gameplay__div-marker'>
                        Marcador:
                    </div>
                </section>
                <section className="section__cpu">
                    <h2 className="section__cpu__h2">CPU</h2>
                    <div>
                        <img src='../img/flork_cpu-trans.png' alt='logo pc'></img>
                    </div>
                    <div className="section__cpu__choice">
                        <h3 className='section__cpu__choice-h3'>Elección: </h3>
                        {eleccionCpu.eleccion}
                    </div>
                </section>
            </section>
        </main>
    );
};