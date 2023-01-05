import "./App.css";
import React from "react";
import Hyperblog from "./components/hyperblog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import FrontEnd from "./components/FrontEnd_Course";
import Displays from "./components/FrontEnd_Course/Displays";
import HTMLSemantico from "./components/FrontEnd_Course/HTMLSemantico";
import PseudoCE from "./components/FrontEnd_Course/PseudoCE";
import Selectores from "./components/FrontEnd_Course/Selectores";
import ValueHTML from "./components/FrontEnd_Course/ValueHTML";
import ValuesCSS from "./components/FrontEnd_Course/ValuesCSS";
import Posisionamiento from "./components/FrontEnd_Course/Posisionamiento";
import Zindex from "./components/FrontEnd_Course/Zindex";
import CssUsados from "./components/FrontEnd_Course/CssUsados";
import Index from "./components/Practise_FrontEnd";
import SendEmail from "./components/Practise_FrontEnd/SendEmail";
import IndexCJ from "./components/Curso_practico_Javascript/IndexCJ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Hyperblog",
    element: <Hyperblog />,
  },
  {
    path: "/FrontEnd",
    element: <FrontEnd />,
  },
  {
    path: "/Displays",
    element: <Displays />,
  },
  {
    path: "/HTMLSemantico",
    element: <HTMLSemantico />,
  },
  {
    path: "/PseudoCE",
    element: <PseudoCE />,
  },
  {
    path: "/Selectores",
    element: <Selectores />,
  },
  {
    path: "/ValueHTML",
    element: <ValueHTML />,
  },
  {
    path: "/ValuesCSS",
    element: <ValuesCSS />,
  },
  {
    path: "/Posisionamiento",
    element: <Posisionamiento />,
  },
  {
    path: "/Zindex",
    element: <Zindex />,
  },
  {
    path: "/CssUsados",
    element: <CssUsados />,
  },
  {
    path: "/PractiseFrondEnd",
    element: <Index />,
  },
  {
    path: "/SendEmail",
    element: <SendEmail />,
  },
  {
    path: "/CursoPracticoJavaScript",
    element: <IndexCJ />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
