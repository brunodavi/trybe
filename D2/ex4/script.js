const memeName = 'sd-01-week4-5-project-meme-generator';
const todoName = 'sd-01-week4-5-project-todo-list';
const fetch = require('node-fetch');

const getRepos = () => {
  return fetch('https://api.github.com/orgs/tryber/repos')
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

module.exports = {
  memeName,
  todoName,
  getRepos
}