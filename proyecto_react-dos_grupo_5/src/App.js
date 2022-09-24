import './App.css';
import Reglas from './Components/Reglas';
import reglas from './Json/reglas.json';


function App() {
  return (
    <>
    <Reglas/>
    {reglas.map(reglamento =>
    <Reglas
     line0={reglamento.line0}
     line1={reglamento.line1}
     line2={reglamento.line2}
     line3={reglamento.line3}
     line4={reglamento.line4}
    ></Reglas>)
  }
    </>
  );
}

export default App;
