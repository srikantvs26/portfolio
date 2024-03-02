import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import TypeWriter from "./Component/TypeWriter/TypeWriter";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
       <TypeWriter/>
      </header>
    </div>
  );
}

export default App;
