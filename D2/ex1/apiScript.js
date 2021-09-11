// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const h2 = document.getElementById('jokeContainer');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => {h2.innerText = joke});
};

window.onload = () => fetchJoke();