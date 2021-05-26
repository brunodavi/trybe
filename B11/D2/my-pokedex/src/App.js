// import logo from './logo.svg';
import './App.css';
import Pokemon from './component/Pokemon'

function App() {
  return (
    <div>
      <h1>PokeDex</h1>
      <div className="list">
        <Pokemon />
      </div>
    </div>
  );
}

export default App;
