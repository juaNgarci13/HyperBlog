import React from "react";
import "./styles.css";
export default function FrontEnd() {
  return (
    <body className="bodyFront">
      <header className="header">
        <h1>Curso de Frontend Developer</h1>
      </header>
      <main>
        <h3>Contenido:</h3>
        <p>En este curso veremos</p>
        <ul className="list_items">
          <li>
            <a href={"ValueHTML"}>Valores de HTML</a>
          </li>
          <li>
            <a href={"ValuesCSS"}>Valores de CSS</a>
          </li>
          <li>
            <a href={"Semantico"}>HTML Semantico</a>
          </li>
          <li>
            <a href={"Selectores"}>Selectores Basicos - Combinados</a>
          </li>
          <li>
            <a href={"PseudoCE"}>PseudoClases - PseudoElementos</a>
          </li>
          <li>
            <a href={"Displays"}>Display's</a>
          </li>
          <li>
            <a href={"Posisionamiento"}>Posisionamiento</a>
          </li>
        </ul>
      </main>
    </body>
  );
}
