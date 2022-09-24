import '../Css/reglas.css';
function Reglas(props){
    return (
        <body>
            <div className="colorLetra">
                <h2>{props.line0}</h2> 
                <h2>{props.line1}</h2>
                <h2>{props.line2}</h2>
                <h2>{props.line3}</h2>
                <h2>{props.line4}</h2>
            </div>
        </body>
        
    );
}
export default Reglas;