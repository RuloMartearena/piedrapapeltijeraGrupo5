import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Juego from './Components/Juego';
import Banner from './Components/Banner.js';
import Recordatorios from './Components/Recordatorio';
import Reglas from './Components/Reglas';
import Desarrolladores from './Components/Desarrolladores';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Banner />}/>
                    <Route path="Juego" element={<Juego />} />
                    <Route path="Recordatorios" element={<Recordatorios />}/>
                    <Route path="/Desarrolladores" element={<Desarrolladores />}/>
                    <Route path="/Reglas" element={<Reglas />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};