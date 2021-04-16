const states = document.getElementById('states');

for (const obj of data) {
  const option = document.createElement('option');
  option.value = obj.Sigla;
  option.innerText = obj.Nome;
  states.appendChild(option);
}
