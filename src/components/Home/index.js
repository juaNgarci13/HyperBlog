import React from "react";
import "../../App.css";
import juan from "../../juan.png";

function Home(props) {
  return (
    <div className="App">
      <h1>Home</h1>
      <p className="pHome">
        Bienvenido a mi repositorio ene el cual estare actualizando todos los
        materiales que íre viendo a lo largo de mi camino de aprendizaje
      </p>
      <ul className="listitems">
        <li>
          <a href={`Hyperblog`}>• Hyperblog- Curso de Manejo de Consola</a>
        </li>
        <li>
          <a href={`FrontEnd`}>• Curso de Frontend Developer</a>
        </li>
        <li>
          <a href={`PractiseFrondEnd`}>
            • Curso Practico de Frontend Developer
          </a>
        </li>
        <li>
          • <a href={"CursoPracticoJavaScript"}>Curso Practico JavaScript</a>
        </li>
      </ul>
      <img src={juan} className="img_juan" alt="pxl" />
    </div>
  );
}

export default Home;
