import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Juego from './components/Game/Juego';
import './App.css';
export default function Game(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<Home />}/>*/}
            <Route path="Juego" element={<Juego />}/>
            {/* <Route path="tablero" element={<Tablero />}/> */}
            {/* <Route path="*" element={<ErrorPage />}/> */}
        </Routes>
        </BrowserRouter>
        </>
    );
};

