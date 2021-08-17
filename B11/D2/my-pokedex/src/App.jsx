// import logo from './logo.svg';
import './App.css';
import pokemons from './data'
import Pokemons from './component/Pokemons'

function App() {
  return (
    <div>
      <h1>PokeDex</h1>
      <Pokemons pokemons={pokemons} type="All" />
    </div>
  );
}

export default App;
