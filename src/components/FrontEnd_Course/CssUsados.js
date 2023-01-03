import React from "react";
import { TiLocation } from "react-icons/ti";
import { FiSend } from "react-icons/fi";

import juan from "../../juan.png";

function CssUsados() {
  return (
    <body className="bodyDisplay">
      <header className="header_D">
        <h1>Etiquetas y Elementos de CSS más usados</h1>
      </header>
      <hr />
      <main className="main_CSS">
        <div className="Card">
          <img
            className="img_card"
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="logo">
            <img src={juan} alt="" />
          </div>
          <h1>Juan M. García</h1>
          <h3>Web Develoveper</h3>
          <div className="info">
            <h3>
              <TiLocation />
              Colombia
            </h3>
            <h3>
              <FiSend values={{ color: "blue" }} />
              Send Email
            </h3>
          </div>
        </div>
      </main>
    </body>
  );
}

export default CssUsados;


¿Qué son y para qué nos sirven las arquitecturas CSS?
Sirven para mantener un orden y una coherencia durante todo el proyecto. Tiene los siguientes objetivos:

Predecibles: escribir reglas claras.
Reutilizable: no escribir código redundante.
Mantenible: que sea fácil de leer y adaptable a los estándares.
Escalable: que pueda crecer fácilmente sin afectar el rendimiento.
.
Estos objetivos se deben ver reflejadas en buenas practicas que debe conocer todo el equipo involucrado en el proyecto como:

Establecer reglas
Explicar la estructura base
Establecer estándares de codificación
Evitar largas hojas de estilo
Documentación