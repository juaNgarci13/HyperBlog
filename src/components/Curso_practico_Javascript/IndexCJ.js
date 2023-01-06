import React, { useState } from "react";
import "./styles.css";

function IndexCJ() {
  setTimeout(myGreeting, 1000);

  function myGreeting() {
    const valor1 = document.getElementById("valor1");
    const valor2 = document.getElementById("valor2");
    const button = document.getElementById("suma");
    const result = document.getElementById("result");

    button.addEventListener("click", sumar);

    function sumar(event) {
      let resultSuma = parseInt(valor1.value) + parseInt(valor2.value);

      result.innerHTML = "El resultado es : " + resultSuma;
    }
  }
  return (
    <>
      <div style={{ color: "white" }}>
        <h1 className="h11">Manipulación del DOM básica...</h1>
        <input onChange={console.log("hola")} id="valor1" />
        <p>+</p>
        <input onChange={console.log("hola")} id="valor2" />
        <p></p>
        <input
          onClick={console.log("hola")}
          id="suma"
          type="button"
          value="Sumar"
        />
        <h4 id="result"></h4>
      </div>
    </>
  );
}

export default IndexCJ;
