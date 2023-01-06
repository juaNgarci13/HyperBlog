# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

```
    Creacion de espacio en memoria para poder guardar una informacion en
    especifico
```

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

```
  Declarar: Cuando creamos una variable pero no le asignamos ningun valor
  Inicializar: Cuando le asignamos o le damos una vlor a esa varibale que acabamos crear
```

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

```
  El operador que nos permite sumar o concatenar es "+", este operador nos permite sumar numeros cuando utilizamos int. Cuando utiilizamos el operador "+" con String, lo que hace es concatenarlos
```

- ¿Cuál operador me permite sumar o concatenar?

```
  El operador es "+"
```

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

```
- Nombre: String
- Apellido: String
- Nombre de usuario en Platzi: String
- Edad: number
- Correo electrónico: String
- Mayor de edad: boolean
- Dinero ahorrado: Number
- Deudas: Number
```

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```js
let name = "Juan";
let firstName = "Garcia";
let user = "JdeManuel013";
let Age = "19";
let Email = "jdemanuel013@gmail.com";
let adult = true;
let saved_money = 100000;
let debts = 1000000;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)

```js
let completeName = name + " " + firtsName;
```

- Dinero real (dinero ahorrado menos deudas)

```js
let realMoney = saved_money - debts;
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

```
Una función es una herramienta en la encapsulamos bloques de codigo que nos ayuda hacer unas instruciones especificas
```

- ¿Cuándo me sirve usar una función en mi código?

```
Cuando necesito hacer una funcion especifica y fcilitar mi flujo de trabajo para optimizar mi trabajo y que lo podremos volver a utilizar en el futuro
```

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

```
Parametros son los que resiven las funciones para poder hacer las instrucuiones que le especificamos, los argumentos son los que le enviamos a las funciones cuando las ejecutamos

```

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log(
  "Mi nombre es " +
    completeName +
    ", pero prefiero que me digas " +
    nickname +
    "."
);
```

```js
const fullName = (name, lastName) => {
  return name + " " + lastName;
};

const nombreCompleto = (name, lastName, nickName) => {
  const nombreCompleto = fullName(name, lastName);

  console.log(
    "Mi nombre es " +
      nombreCompleto +
      ", pero prefiero que me digas " +
      nickName +
      "."
  );
};
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

```
Son la forma en la que ejecutamois un bloquede codigou otro dependiendo de lña validación que le especifiquemos
```

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

Tipos de condicionales:

    - If
    - Else
    - Esl if
    - Switch
    - Condicionales explicitos ( info ? si : no )

    el condicional if (con else y else if) nos permite hacer validaciones completamente distintas(si así queremos) en cada validación o condicional. En cambio, en el switch todos los casos se comparan con la misma variable o condición que definimos en el switch

- ¿Puedo combinar funciones y condicionales?

  SI, las funciones pueden encapsular las condicionales en cualquier bloque de codigo

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}
```

```js
const condicional = (tipoDeSuscripcion) => {
  if (tipoDeSuscripcion) {
    if (tipoDeSuscripcion === "Free") {
      console.log("Solo puedes tomar los cursos gratis");
    }
    if (tipoDeSuscripcion === "Basic") {
      console.log(
        "Puedes tomar casi todos los cursos de Platzi durante un mes"
      );
    }
    if (tipoDeSuscripcion === "Expert") {
      console.log(
        "Puedes tomar casi todos los cursos de Platzi durante un año"
      );
    }
    if (tipoDeSuscripcion === "ExpertPlus") {
      console.log(
        "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
      );
    }
  } else {
    console.log("No tienes ningúna suscripción");
  }
};
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```js
const sups = {
  Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  Free: "Solo puedes tomar los cursos gratis",
  Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
  ExpertPlus:
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

const conseguirTipoSuscripcion = (sup) => {
  if (sups[sup]) {
    console.log(sups[sup]);
    return;
  }
  console.warn("No tienes ningúna suscripción");
};
```

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

  un ciclo es una forma de ejecutar un bloque de codigo repetidas ves hasta que se cumpla una condición

- ¿Qué tipos de ciclos existen en JavaScript?

Tipos de Ciclos:

    - For
    - While
    - Do While

- ¿Qué es un ciclo infinito y por qué es un problema?

```
Un ciclo infinito se genera cuando la condición que se especifico para que el ciclo termine, nunca se ejecuta, entonces el ciclo sigue funcionando y no parara nunca ya que no encuentra una solucion.

Esto es un problema ya que esto genera un gran espacio en memoria haciendo que crashee nuestro equipo
```

- ¿Puedo mezclar ciclos y condicionales?

Si, los ciclos son una especie de condicionales, nada nos impide agregarr mas condicionales dentro del ciclo.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}
```

```js
let i = 0;

while (i <= 5) {
  console.log("El valor de i es: " + i);
  i++;
}

let i = 10;

while (i >= 0) {
  console.log("El valor de i es: " + i);
  i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```js
let respuesta;

while(respuesta != 4){
    let pregunta = prompt("Cuanto es 2 + 2?");
    respuesta = pregunta;
}


> '4'
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

```
Los arrays son variables estructuradas, donde cada elemento se almacena de forma consecutiva en memoria.  ["🍔","🍟","🌭","🥓","🍕"]
```

- ¿Qué es un objeto?

```
es un conjunto de propiedades y tipos encapsulados por así decirlo en una caja ({📦})
```

- ¿Cuándo es mejor usar objetos o arrays?

```
Los arrays se usan para series que poseen valores simples, mientras que los objetos son utilizadas para las series en que hay distintos objetos y propiedades con diferentes valores.
```

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

```
Claro qeu si se puede, hay multiples formas de poder utilizarlos juntos.
```

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

const ejemplo = (comidas) => {
console.log(comidas[0])
}

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
const comida = ["🍔", "🍟", "🌭", "🥓", "🍕"];

function allElements(ofThisArray) {
  ofThisArray.forEach((item) => {
    console.log(item);
  });
}

allElements(comida);
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
const comida = {
  hamburguesa: "🍔",
  papas: "🍟",
  perro: "🌭",
  tocino: "🥓",
  pizza: "🍕",
};

const exampleObject = (comidas) => {
  let ObjectValues = Object.values(comidas);

  ObjectValues.forEach((i) => {
    console.log(i);
  });
};

exampleObject(comida);
```

## Manipulacion del HTML desde JS - 1

```JS
  setTimeout(myGreeting, 1000);

  function myGreeting() {
    // SELECION DE UN ELEMENTO
    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    const parrafito = document.querySelector(".parrafito");
    const parrafo = document.querySelector("#parrafo");
    const input = document.querySelector("input");

    // AGREGAR UN ELEMENTO HTML DESDE NUESTRO JS
    p.innerHTML = "<p>muy feo</p>";

    // GREGARLE UN VALOR A UN ELEMTO DESDE EL JS
    p.setAttribute("class", "valor");

    // ELIMINAR UN ATRIBUTO DESDE EL JS
    p.removeAttribute("class");

    // OPTENER UN ATRIBUTO DESDE EL JS
    console.log(p.getAttribute("class"));

    // AGREGARLE UN VALOR A LA CLASS
    p.classList.add("valor2");

    // ELIMINAR UN VALOR A LA CLASS
    p.classList.remove("valor2");

    // CREAR UN ELEMENTO NUEVO Y AGREGARLO AL HTML
    const img = document.createElement("img");

    img.setAttribute(
      "src",
      // "https://static.platzi.com/static/images/footer/logo.png"
      "https://seeklogo.com/images/P/platzi-logo-98005E6AD6-seeklogo.com.png"
    );

    img.setAttribute("alt", "logo");

    p.innerHTML = "";
    p.appendChild(img);

    console.log({
      h1,
      p,
      parrafito,
      parrafo,
      input,
    });
  }

```

## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!
