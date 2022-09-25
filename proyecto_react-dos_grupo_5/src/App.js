import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Juego from './components/game/Juego';
import Banner from './components/Banner.js';
import Recordatorio from './components/Recordatorio';
import Reglas from './components/Reglas';
import Desarroladores from './components/Desarroladores';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Banner />}/>*/}
                    <Route path="Juego" element={<Juego />} />
                    {/* <Route path="/" element={<Recordatorio />}/>*/}
                    {/* <Route path="/" element={<Desarroladores />}/>*/}
                    {/* <Route path="/" element={<Reglas />}/>*/}
                </Routes>
            </BrowserRouter>
        </>
    );
};