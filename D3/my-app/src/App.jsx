import { useEffect, useState } from "react";
import useAbility from "./hooks/useAbility";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [abilities, setUrl] = useAbility();
  const [limit, setLimit] = useState(10);

  function getPokemons() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then((response) => response.json())
      .then(({ results }) => setPokeList(results));
  }

  function addButton() {
    setLimit(limit + 10)
  }

  useEffect(getPokemons, [limit]);
  return (
    <div>
      <div>{abilities.toString()}</div>
      <ul>
        {pokeList.map(({ name, url }) => (
          <li key={name} onClick={() => setUrl(url)}>{name}</li>
        ))}
      </ul>
      <button type="button" onClick={ addButton }>Add +10</button>
    </div>
  );
}

export default App;
