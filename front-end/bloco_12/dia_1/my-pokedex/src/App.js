import './App.css';
import pokemons from './data';
import Pokedex from "./Pokedex";

function App() {
  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <button>Next</button>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;