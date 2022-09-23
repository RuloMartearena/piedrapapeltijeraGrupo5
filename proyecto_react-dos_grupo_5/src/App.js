import react,{useState} from 'react';
import Opcion from './components/Opcion';
import Resultado from './components/Resultado';
import './App.css';
function App() {
    const [eleccionJugador, setEleccionJugador]= useState({});
    const [eleccionMaquina, setEleccionCpu]= useState({});

    const opciones =[
        {
            eleccion: "piedra",
            derrota:"tijera"
        },
        {
            eleccion: "papel",
            derrota:"piedra"
        },
        {
            eleccion: "tijera",
            derrota:"papel"
        }
    
    ]
    const elegirOpcion=(event)=>{
        const jugador=opciones.find(e => e.eleccion === event.target.
          textContent);
        setEleccionJugador(jugador);
        eleccionRival();
    }
    
    const eleccionRival =()=>{
        const eleccion = opciones[Math.floor(Math.random()*2)]
        setEleccionCpu(eleccion);
    }

    return(
        <div className="Juego">
            <Resultado jugador={eleccionJugador} maquina={eleccionMaquina}></Resultado>
            <main>
                <section>
                    <div className="Jugador">Jugador</div>
                    <div className="eleccion">{eleccionJugador.eleccion}</div>
                </section>
                <section>
                    <div className="CPU">CPU</div>
                    <div className="eleccion">{eleccionMaquina.eleccion}</div>
                </section>

            </main>
            <div className="opcion">
            {
                opciones.map((e,index) =><Opcion 
                                            elegir={elegirOpcion} /*>(###)*/ 
                                            valor={opciones[index]}
                                            />)
            }
            </div>
        </div>
    );
};
export default App;