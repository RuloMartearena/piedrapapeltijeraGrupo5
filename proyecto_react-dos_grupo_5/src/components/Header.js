import React from "react";

class Header extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <ul className="nav-ul">
                        <li>
                            <a href="">Inicio</a>
                        </li>
                        <li>
                            <a href="">Reglas</a>
                        </li>
                        <li>
                            <a href="">Desarroladores</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;