import { useEffect, useState } from "react";
import "./App.css";
import Particle from "./Component/Particle";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, setLoad] = useState(true);
  return (
    <>
      {/* <TypeWriter /> */}
      <Particle />
    </>
  );
}

export default App;
