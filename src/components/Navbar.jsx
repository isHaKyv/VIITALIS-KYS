import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import LOGO from '../assets/IMSS_Logosímbolo.png'; 
import LOGO2 from '../assets/RAIDEN.png'; 

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                {/* Envolvemos los logos en <Link> para redirigir a la página principal */}
                <Link to="/">
                    <img src={LOGO2} alt="Logo 1" />
                </Link>
                <Link to="/">
                    <img src={LOGO} alt="Logo 2" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/directorio">Directorios</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/analisis" className="button">Análisis</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
