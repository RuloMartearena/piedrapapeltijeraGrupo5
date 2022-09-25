
function Reglas (props){
   return(
    <body>
        <div className="div">
            <h2 className="title">{props.title}</h2>
            <ul className="list">
                <li>{props.line1}</li>
                <li>{props.line2}</li>
                <li>{props.line3}</li>
            </ul>
        </div>
    </body>
        
        
   )
}

export default Reglas;