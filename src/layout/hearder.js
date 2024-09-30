import React, { useEffect } from 'react';
import feather from 'feather-icons'; // Asegúrate de que feather-icons esté instalado
import logo from '../data/LogoIBIS.png'; // Importamos el logo del Hotel IBIS
import './hearder.css'

const Header = () => {
    // Uso de useEffect para asegurar que feather-icons se renderice después del montaje del componente
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <header className="header-container">
            <div className="logo-container">
                <img src={logo} alt="Hotel IBIS Logo" className="logo" />
            </div>
            <nav className="nav-links">
                <a href="#habitaciones">Habitaciones</a>
                <span>|</span>
                <a href="#servicios">Servicios</a>
                <span>|</span>
                <a href="#ubicacion">Ubicación</a>
                <span>|</span>
                <a href="#preguntas-frecuentes">Preguntas frecuentes</a>
            </nav>
            <div className="actions">
                <i data-feather="shopping-cart"></i> {/* Ícono de carrito */}
                <button className="login-btn">Iniciar sesión</button>
                <button className="register-btn">Registrarse</button>
            </div>
        </header>
    );
};

export default Header;

