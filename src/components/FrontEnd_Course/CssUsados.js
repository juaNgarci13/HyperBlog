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
              <TiLocation style={{ marginRight: "5px" }} />
              Colombia
            </h3>
            <h3>
              <FiSend style={{ marginRight: "5px" }} />
              Send Email
            </h3>
          </div>
          <div className="info_2">
            <div>
              <h4>Followers</h4>
              <h5>1000 K</h5>
            </div>
            <div>
              <h4>Twitter</h4>
              <h5>1000 K</h5>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default CssUsados;
