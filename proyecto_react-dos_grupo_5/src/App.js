import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Juego from './components/Juego';
import Banner from './components/Banner.js';
import Recordatorios from './components/Recordatorio';
import Reglas from './components/Reglas';
import Desarrolladores from './components/Desarrolladores';

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