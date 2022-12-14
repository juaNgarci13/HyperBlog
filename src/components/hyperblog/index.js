import React from "react";
import "../styles/GlobalStyles.css";

// ICONS
import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramLine,
  RiYoutubeLine,
} from "react-icons/ri";

import logo from "./logo.webp";

export default function Hyperblog() {
  return (
    <>
      <div class="nav">
        <img class="logo_nav" src={logo} alt="" />
        <ul class="ul">
          <li>
            <button class="nav_a">Home</button>
          </li>
          <li>
            <button class="nav_a">Cursos</button>
          </li>
          <li>
            <button class="nav_a">Blogs</button>
          </li>
          <li>
            <button class="nav_a">Comunidad</button>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="cabecera">
          <img class="logo" src={logo} alt="" />
          <span id="tagline"> Millones de cursos para ti </span>
        </div>
        <h1 className="h1_H">
          Descubre los Millones de Cursos que Tenemos para Ti.
        </h1>
        <hr />

        <p>
          • Información sobre nuestro blogpost para el curso de manejo de git y
          github
        </p>
      </div>

      <div class="footer">
        <img class="logo" src={logo} alt="" />

        <div class="redes">
          <p>
            Transformamos la economía de nuestros países entrenando a la próxima
            generación de profesionales en tecnología.
          </p>
          <p>Aprende en nuestras redes: </p>
          <RiFacebookFill className="F" />
          <RiTwitterFill class="T" />
          <RiInstagramLine class="I" />
          <RiYoutubeLine class="Y" />
        </div>
      </div>
    </>
  );
}

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <link rel="stylesheet" href="styles.css">
//     <title>Index</title>
// </head>

// <body>
//     <div class="nav">
//         <img class="logo_nav" src="logo.webp" alt="">
//         <ul class="ul">
//             <li><button class="nav_a">Home</button></li>
//             <li><button class="nav_a">Cursos</button></li>
//             <li><button class="nav_a">Blogs</button></li>
//             <li><button class="nav_a">Comunidad</button></li>
//         </ul>
//     </div>

//     <div class="container">

//         <div class="cabecera">
//             <img class="logo" src="logo.webp" alt="">
//             <span id="tagline">
//                 Millones de cursos para ti
//             </span>
//         </div>
//         <h1>Descubre los Millones de Cursos que Tenemos para Ti.</h1>
//         <hr>
//         <p>• Información sobre nuestro blogpost para el curso de manejo de git y github</p>
//     </div>

//     <div class="footer">
//         <img class="logo" src="logo.webp" alt="">
//         <p>Transformamos la economía de nuestros países entrenando a la próxima generación de profesionales en
//             tecnología.</p>
//         <div class="redes">
//             <p>
//                 Aprende en nuestras redes:
//             </p>
//             <button class="T">T</button>
//             <button class="F">F</button>
//             <button class="I">I</button>
//             <button class="Y">Y</button>
//         </div>
//     </div>

// </body>

// </html>
