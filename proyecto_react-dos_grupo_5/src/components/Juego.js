import react,{useState} from 'react';
import Opcion from './Opcion';
import Resultado from './Resultado';
import '../App.css';
    export default function Tablero() {
        //estas costgantes la usaremos para guardar el ESTADO de cada Jugador
        const [eleccionJugador, setEleccionJugador]= useState([]);
                                    /**este elemento es la FUNCION
                                    a llamar para cambiar el valor de este ESTADO*/
                /**este elemento es el que guarda 
                 el valor del estado EN ESTE CASO
                 SERA UN SECCION DE LA LISTA(osea la eleccion y derrota)*/                    

        const [eleccionCpu, setEleccionCpu]= useState([]);

        //Array cinn posibles opciones A LA HORA DE ELEGIR
        //esto facilita a la hora de determinar quien a ganado
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
            const jugador=opciones.find(e => e.eleccion === event.target.textContent); //con esto encontraremos el objeto que eligio el jugador dentro del ARRAY
                                        /** el primer elemento del array cuyo parametro "e.eleccion"
                                         *  es = al "textContent" debes devolvermelo*/
            setEleccionJugador(jugador);
            eleccionCPU();/**la llamamos en este evento para que al momento de
             que el jugador haga su eleccion la cpu tambien lo haga*/
        }/**Para EJECUTAR esta funcion tenemos que pasar esta funcion como PROP al componente OPCION >(###) */
        
        const eleccionCPU =()=>{
            const eleccion = opciones[Math.floor(Math.random()*opciones.lenght)]
            setEleccionCpu(eleccion);
        }

        return(
            <div className="Juego">
                <Resultado jugador={eleccionJugador} maquina={eleccionCPU}/**con esto le pasamos el estado POR PROPS el estado de un componente*//> 
                <main  /**Para demostrar que como el estado cambia y se vuelve a renderizar vemos lo siguiente*/>
                    <section>
                        <div className="Jugador">Jugador</div>
                        <div className="eleccion">{eleccionJugador.eleccion}</div>
                    </section>
                    <section>
                        <div className="CPU">CPU</div>
                        <div className="eleccion">{eleccionCpu.eleccion}</div>
                    </section>

                </main>
                <div className="opcion">
                {
                    opciones.map((e,index) =><Opcion 
                                                elegir={elegirOpcion} /*>(###)*/ 
                                                valor={opciones[index]}/>)//aqui llamamos al componente que queremos renderizar
                    /**Con esto traemos el                                     //esto muestra las 3 opciones a elegir en pantalla
                     elemento y el indice
                     */
                }
                </div>
            </div>
        );
    };