import react from 'react';
const Opcion=(props)=>{
    return(
        <div className="opcion" onClick={props.elegir}>
            {props.valor.eleccion}
        </div>
        /*esto funciona para pasarle como props el objeto del Array
        con la eleccion y el objeto que derrota
        **/
    )
}
export default Opcion;