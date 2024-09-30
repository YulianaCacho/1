import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import React from 'react';
import mapa from '../data/mapaTRUX.png'; 
import './basic.css';


const Basic = () => {
    return (
        <div className="container basic-section">
            <div className="row">
                {/* Columna Izquierda: Mapa y descripción breve */}
                <div className="col-md-6">
                    <div className="description-container">
                        <h2>Bienvenidos a Trujillo</h2>
                        <p>
                            En Hotel Ibis, estaremos gustosos de atenderlo, gracias por su preferencia.
                        </p>
                        <div className="map-container">
                            <img 
                                 src={mapa} 
                                 alt="Mapa de Trux" 
                                 className="mapa" 
                            />
                             
                            <p className="map-description">
                                La ciudad de primavera peruana, con rica historia y abundantes atractivos turísticos.
                            </p>
                        </div>
                        <p>Trujillo, Trujillo, Perú.</p>
                    </div>
                </div>

                {/* Columna Derecha: Descripción larga e imágenes */}
                <div className="col-md-6">
                    <div className="hotel-description">
                        <p className="large-text">
                            <span className="large-letter">S</span>iéntase como en casa, tómese un delicioso desayuno matutino observando el Morro de Calzada
                            desde nuestro comedor en el 6to piso. Nuestro Hotel de 4 estrellas tiene todo para su feliz
                            estadía, no dude en contactarnos y acudiremos a su solicitud.
                        </p>
                    </div>

                    <div className="images-container">
                         <img
                            src="https://tnews.com.pe/wp-content/uploads/2019/11/201119_f1.jpg"
                            className="hotel-image"
                         />
                         <img
                           src="https://hotevia.info/wp-content/uploads/2019/11/Ibis-Trujillo-Hotel-lobby.jpg" // Coloca aquí la ruta correcta de las imágenes del hotel
                           alt="Restaurante del Hotel Ibis"
                           className="hotel-image"
                         />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basic;
