import '../Css/desarroladores.css';
function Desarroladores (props){
     return(
         <body>
                <section>
                 <h1 className="titulo">{props.title}</h1>
                 <hr/>
                 <div>
                    <ul className="nombres">
                        <li>{props.name1}</li>
                        <br></br>
                        <li>{props.name2}</li>
                        <br></br>
                        <li>{props.name3}</li>
                        <br></br>
                        <li>{props.name4}</li>
                        <br></br>
                        <li>{props.name5}</li>
                        <br></br>
                        <li>{props.name6}</li>
                    </ul>
                      </div>
                      <hr/>
                      <h2 className="grupo">{props.grupo}</h2>
                </section>
                </body>
     )
}
export default Desarroladores;