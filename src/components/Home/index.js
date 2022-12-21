import React from "react";
import "../../App.css";

function Home(props) {
  return (
    <div className="App">
      <h1>Home</h1>
      <ul>
        <li className="liHome">
          • <a href={`Hyperblog`}>Hyperblog</a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
