// Importamos React y la imagen
import React from 'react';
import LogoIBIS from '../data/LogoIBIS.png'; // Importamos la imagen desde la carpeta 'data'

const Main = () => {
    return (
        <div className="container text-center">
            <br></br>
            <center>
                {/* Agregamos la imagen */}
                <img src={LogoIBIS} alt="Logo del Hotel IBIS" width="200" /> {/* Aquí insertamos la imagen */}
                
                <p>
                    Ven a disfrutar del paraíso tropical en las playas de Cancún, México, con su suave arena blanca y aguas turquesas
                    cristalinas. Cancún es el destino perfecto para relajarse y disfrutar del sol. Sumérgete en emocionantes actividades
                    acuáticas como snorkel, buceo y navegación en catamarán o simplemente recuéstate en una cómoda hamaca y deja que el
                    mundo pase a tu alrededor con una vibrante vida nocturna, deliciosa gastronomía.
                </p>
            </center>
        </div>
    );
};

export default Main;
