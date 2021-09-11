function dogApi(callback) {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(callback);
}

module.exports = dogApi