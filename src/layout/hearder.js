import React, { useEffect } from 'react';
import feather from 'feather-icons';
import logo from '../data/LogoIBIS.png'; // Ruta correcta al logo del hotel IBIS
import './hearder.css';

const Header = () => {
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <div className="header-background">
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
                    <i data-feather="shopping-cart" className="shopping-cart"></i> {/* Ícono de carrito de compras */}
                    <button className="login-btn">
                        <i className="bi bi-person-circle"></i> Iniciar sesión
                    </button>
                    <button className="register-btn">
                        <i className="bi bi-person-circle"></i> Registrarse
                    </button>
                </div>
            </header>

            {/* Sección gris debajo del header */}
            <div className="reservation-section">
                <div className="reservation-item">
                    <label>DÍAS DE RESERVA</label>
                    <input type="text" placeholder="Dom 20 oct - Lun 21 oct" />
                </div>
                <div className="reservation-item">
                    <label>HABITACIÓN</label>
                    <select>
                        <option value="">Seleccione...</option>
                    </select>
                </div>
                <div className="reservation-item">
                    <label>¿CUÁNTAS?</label>
                    <select>
                        <option value="1">1 Habitación</option>
                    </select>
                </div>
                <div className="reservation-item">
                    <label>HUÉSPEDES</label>
                    <select>
                        <option value="1">1 Adulto</option>
                    </select>
                </div>
                <div className="reservation-item">
                    <label>SEDE</label>
                    <select>
                        <option value="">Seleccione...</option>
                    </select>
                </div>
                <button className="consult-btn">CONSULTAR</button>
            </div>
        </div>
    );
};

export default Header;
