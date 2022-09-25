import React from "react";
import logojuego from '../img/logo.png';

class Banner extends React.Component {
    render() {
        return (
            <body>
                <section>
                    <div className="inicio">
                        <h1>Hora de jugar Piedra, Papel o Tijera!!</h1>
                    </div>
                    <div className="banner-img">
                        <a href=""> <img src={logojuego} alt="Logo del Juego" width="400px" height="400px"/> </a>
                    </div>
                    <div className="subtitulo">
                        <h2>Dar click a la imagen para comenzar</h2>
                    </div>
                </section>
            </body>

        );
    }
}

export default Banner;