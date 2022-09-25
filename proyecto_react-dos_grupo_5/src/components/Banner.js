import React from "react";
import '../css/banner.css';

class Banner extends React.Component {
    render() {
        return (
            <body>
                <nav className="nav__bar">
                    <ul className="nav__bar-ul">
                        <li>
                            <a href="">Reglas</a>
                        </li>
                        <li>
                            <a href="">Recordatorios</a>
                        </li>
                        <li>
                            <a href="">Desarroladores</a>
                        </li>
                    </ul>
                </nav>
                <section className="section__inicio-conteiner">
                    <h1>Hora de jugar Piedra, Papel o Tijera!!</h1>
                    <div className="banner-img">
                        <a href=""> <img className="img__inico" src="../img/logo.png" alt="Logo del Juego" /> </a>
                    </div>
                    <h2>Dar click a la imagen para comenzar</h2>
                </section>
            </body>
        );
    }
}

export default Banner;