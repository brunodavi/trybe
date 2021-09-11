const ADD_JOKE = 'ADD_JOKE';

function addJoke(joke) {
  return {
    type: ADD_JOKE,
    joke,
  }
}

export function addJokeAsync() {
  return (dispatch) => (
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((joke) => dispatch(addJoke(joke)))
      .catch(console.error)
  );
}