import { useEffect, useState } from "react";

function useAbility() {
	const [pokeUrl, setPokeUrl] = useState('');
	const [abilities, setAbilities] = useState([]);

	function getAbilities() {
		if (pokeUrl) {
			fetch(pokeUrl)
				.then((response) => response.json())
				.then(({abilities: abilitiesList}) => {
					const results = abilitiesList.map(({ability: { name }}) => name)
					setAbilities(results)
				})
		}
	}

	useEffect(getAbilities, [pokeUrl])
	return [abilities, setPokeUrl];
}

export default useAbility;
