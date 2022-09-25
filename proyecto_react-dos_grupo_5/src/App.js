import './App.css';
import Reglas from './components/Reglas';
import reglas from './json/reglas.json';
import './index.css'

function App() {
  return (
    <>
    {reglas.map(record =>
      <Reglas
        title={record.title}
        line1={record.line1}
        line2={record.line2}
        line3={record.line3}
        ></Reglas>)}
      
    </>
  );
}

export default App;
