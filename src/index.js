
import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos Bootstrap
import React, { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Importamos los componentes
import Header from "./layout/hearder"; // Corregido el nombre de Hearder a Header
import Carrusel from "./layout/carrusel";
import Aside from "./layout/aside";
import Footer from "./layout/footer";
import Basic from "./layout/basic";
import Single from "./single";

// Feather icons
const feather = require('feather-icons');

// Definimos el componente de Layout para el contenido general
const Layout = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Outlet /> {/* Esto renderiza los elementos hijos definidos en las rutas */}
      </div>
      <Footer />
    </>
  );
};

// Definimos las rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Usamos el layout que incluye el header y footer
    children: [
      {
        path: '',
        element: (
          <>
            <Basic /> {/* Renderizamos el contenido de Basic en la página de inicio */}
          </>
        ),
      },
      {
        path: "/detalle/:slug",
        element: <Single />, // Página para los detalles
      },
    ],
  },
]);

// Renderizamos la aplicación en el root
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
