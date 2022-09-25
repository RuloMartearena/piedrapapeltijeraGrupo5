import '../css/recordatorio.css';

function Recordatorio() {
    return (
        <section>
            <div className="div__recordatorio-conteiner">
                <h2 className="h2__title"><u>Recordatorios</u></h2>
                <ul className="ul__recordatorio">
                    <li>El "Papel" gana a la "Piedra"</li>
                    <li>La "Piedra" gana a la "Tijera"</li>
                    <li>La "Tijera" gana al "Papel"</li>
                    <li>Al ser iguales, se empata</li>
                </ul>
            </div>
        </section>
    )
}

export default Recordatorio;