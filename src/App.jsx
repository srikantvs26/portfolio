import { useEffect, useState } from "react";
import "./App.css";
import Particle from "./Component/Particle";

import "bootstrap/dist/css/bootstrap.min.css";
import TypeWriter from "./Component/TypeWriter/TypeWriter";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  return (
    <>
      <Particle />
      <NavBar />
      <TypeWriter />
    </>
  );
}

export default App;
