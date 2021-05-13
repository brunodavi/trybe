const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';
const h2 = document.getElementById("jokeContainer");

function fetchJoke() {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) =>  h2.innerText = joke)
}

fetchJoke();

