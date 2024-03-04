import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import Particle from "./Component/Particle";
import Preloader from "./Component/Preloader";
import TypeWriter from "./Component/TypeWriter/TypeWriter";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <header className="App-header">
          {load ? <></> : <Particle />}
          <NavBar />
          <TypeWriter />
        </header>
      </div>
    </>
  );
}

export default App;
