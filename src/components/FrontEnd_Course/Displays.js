import React from "react";

import juan from "../../juan.png";

const inline = [
  "b",
  "big",
  "i",
  "small",
  "tt",
  "abbr",
  "acronym",
  "cite",
  "code",
  "dfn",
  "em",
  "kbd",
  "strong",
  "samp",
  "time",
  "var",
  "a",
  "bdo",
  "br",
  "img",
  "map",
  "object",
  "q",
  "script",
  "span",
  "sub",
  "sup",
  "button",
  "input",
  "label",
  "select",
  "textarea",
];

const Block = [
  "<address>",
  "<article>",
  "<aside>",
  "<audio>",
  "<blockquote>",
  "<canvas>",
  "<dd>",
  "<div>",
  "<dl>",
  "<fieldset>",
  "<figcaption>",
  "<figure>",
  "<footer>",
  "<form>",
  "<header>",
  "<hgroup>",
  "<hr>",
  "<li>",
  "<main>",
  "<nav>",
  "<noscript>",
  "<ol>",
  "<output>",
  "<p>",
  "<pre>",
  "<section>",
  "<table>",
  "<tfoot>",
  "<ul>",
  "<video>",
  "<h1>...<h6>",
];

export default function Displays() {
  return (
    <body className="bodyDisplay">
      <header className="header_D">
        <h1>Display's</h1>
      </header>
      <hr />
      <main className="main">
        <p className="p_dis">
          Existen varios tipos de Display's, los cuales son:
        </p>
        <ul className="ul_D2">
          <li>Block</li>
          <li>Inline</li>
          <li>Inline-Block</li>
          <li>Flex</li>
          <li>Grid</li>
        </ul>

        <div className="content">
          <div className="Inline_all">
            <h2>Inline</h2>

            <h3>¿Cuáles son los elementos de línea?</h3>
            <p>
              La siguiente es una lista de los elementos en línea de HTML,
              podemos ver algunos de estos elementos en los cuales colocamos
              contenido en forma de texto:
            </p>

            <ul className="ul_D">
              {inline.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>

            <h3> ¿Debo aprender de memoria todos los elementos de línea? 😰</h3>
            <p>
              La respuesta es que no es necesario, simplemente con la practica
              lograras identificar que elementos son de línea o de bloque.
              Recuerda que la practica hace al maestro. 🤓
            </p>
          </div>

          <div className="Block_all">
            <h2>Block</h2>

            <h3> ¿Cuáles son los elementos de Bloque?</h3>
            <p>
              La siguiente es una lista de los elementos en bloque, alguno de
              ellos los podemos ver como contenedores:
            </p>

            <ul className="ul_D">
              {Block.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>

            <p>
              Recuerda que no es necesario que memorices cada uno de estos
              elementos, ya que con la practica lograras identificarlos
              fácilmente. 🤓
            </p>
          </div>

          <div className="inlineBlock_all">
            <h2>Inline-Block</h2>
            <p>
              Es una combinación entre los dos tipos de elementos mencionados
              anteriormente (block e inline), los elementos con el valor
              inline-block admiten dimensiones pero todavía son elementos de
              línea, es decir estarán colocados uno al lado de otro.
            </p>
            <p>
              Un dato curioso es que según la documentación oficial de la MDN el
              elemento HTML [img] es un elemento inline, pero una imagen es como
              cualquier otro elemento de bloque porque puede contener: border,
              margin, padding y también puedes modificar su altura y anchura.
            </p>
            <p>
              🤯 Para ser precisos una imagen es en realidad un elemento de
              línea y de bloque al mismo tiempo, en otras palabras: display:
              inline-block. ¡Vamos a comprobarlo!
            </p>
          </div>

          <div className="Flex_Grid_all">
            <h2>Flex y Grid</h2>
            <p>
              Los últimos valores mas importantes de la propiedad display es
              grid y flex. No voy a profundizar en estos temas porque considero
              que merecen un articulo propio e incluso un tutorial completo,
              bien explicado y con muchos ejercicios ya que son temas extensos.
            </p>
            <p>
              De manera general podemos decir que el valor flex se usa para
              maquetar componentes como por ejemplo, un menú de navegación y
              grid se usa para maquetar el layout. Se que estoy generalizando y
              esto, no es 100% así, porque pueden haber componentes complejos en
              los que es necesario usar grid y algunos layouts son simples y
              otros no, todo depende de lo que estés diseñando.
            </p>
            <p>
              De todas maneras comparto una infografía de un gran desarrollador
              llamado Addy Osmani (Ingeniero en Google Chrome) que se basó en el
              articulo de Ahmad Shadeed para realizar esta comparación.
            </p>
          </div>
        </div>

        <div className="bloque">
          <h3>Block</h3>
          <p class="block">Soy un elemento de bloque</p>
          <p class="block">Soy otro elemento de bloque</p>
          <p class="block">Soy otro elemento más de bloque</p>
        </div>
        <div className="Inline">
          <h3>Inline</h3>
          <span class="inline">Soy un elemento de linea</span>
          <span class="inline">Soy otro elemento de linea</span>
          <span class="inline">Soy otro elemento más de linea</span>
        </div>
        <div className="Inline">
          <h3>Inline-Block</h3>
          <img className="logoJ" src={juan} alt="" />
          <img className="logoJ" src={juan} alt="" />
          <img className="logoJ" src={juan} alt="" />
          <img className="logoJ" src={juan} alt="" />
          <img className="logoJ" src={juan} alt="" />
          <img className="logoJ" src={juan} alt="" />
        </div>
        <div className="Inline">
          <h3>Flex</h3>
          <div className="pather">
            <div className="son"></div>
            <div className="son"></div>
            <div className="son"></div>
            <div className="son"></div>
          </div>
        </div>
        <div className="Inline">
          <h3>Grid</h3>
          <div className="pather_grid">
            <div className="son_grid"></div>
            <div className="son_grid"></div>
            <div className="son_grid"></div>
            <div className="son_grid"></div>
            <div className="son_grid"></div>
            <div className="son_grid"></div>
            <div className="son_grid"></div>
            <div className="son_grid"></div>
            <div className="son_grid"></div>
          </div>
        </div>
      </main>
    </body>
  );
}
