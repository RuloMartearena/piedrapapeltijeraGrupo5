const Resultado = (props) => {
    let resultadoFinal;
    /**Si el parametro "derrota" del jugador es igual a la "eleccion" de la CPU" el ganador es el Jugador*/
    if (props.jugador.derrota === props.maquina.eleccion && props.jugador.eleccion) {
        resultadoFinal =
            <div className="div__result-player">
                <h2>Ganador: Jugador</h2>
                <img className="img__result-player" src="../img/ibai.jpg" alt="ibai ganador player"></img>
            </div>
    }
    else if (props.maquina.derrota === props.jugador.eleccion && props.jugador.eleccion) {
        resultadoFinal =
            <div className="div__result-cpu">
                <h2>Ganador: CPU</h2>
                <img className="img__result-cpu" src="../img/cpuGanador.jpg" alt="ibai ganador pc"></img>
            </div>

    }
    else if (props.jugador.eleccion === props.maquina.eleccion && props.jugador.eleccion) {
        resultadoFinal =
            <div className="div__result-empate">
                <h2>¡Empate!</h2>
                <img className="img__result-empate" src="../img/empate.jpg" alt="ibai ganador pc"></img>
            </div>

    }
    return (
        <h2>{resultadoFinal}</h2>
    )
}
export default Resultado;