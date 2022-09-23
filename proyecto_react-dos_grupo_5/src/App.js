import './App.css';
import Desarroladores from './components/desarroladores';
import desarroladore from './components/desarroladore.json';


function App() {
  return (
    <>
      
          {desarroladore.map (desa =>
            <Desarroladores
            title={desa.title}
            name1={desa.name1}
            name2={desa.name2}
            name3={desa.name3}
            name4={desa.name4}
            name5={desa.name5}
            name6={desa.name6}
            grupo={desa.grupo}
          ></Desarroladores>)}
  );
}

export default App;
