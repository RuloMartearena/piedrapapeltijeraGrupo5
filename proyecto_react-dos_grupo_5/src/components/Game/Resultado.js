import react from 'react';
const Resultado =(props)=>{
    let resultadoFinal;
    /**Si el parametro "derrota" del jugador es igual a la "eleccion" de la CPU" el ganador es el Jugador*/
    if(props.jugador.derrota === props.maquina.eleccion && props.jugador.eleccion){
        resultadoFinal= <h2>Ganador: Jugador</h2>
    }
    else if(props.maquina.derrota === props.jugador.eleccion && props.jugador.eleccion){
        resultadoFinal= <h2>Ganador: CPU</h2>
    }
    else if(props.jugador.eleccion === props.maquina.eleccion && props.jugador.eleccion){
        resultadoFinal= <h2># EMPATE :^o #</h2>
    }
    return(
        <h2>{resultadoFinal}</h2>
    )
}
export default Resultado;