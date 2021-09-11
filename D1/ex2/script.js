const divData = document.getElementById('data');
const states = document.getElementById('states');
const reset = document.getElementById('reset');

for (const obj of data) {
  const option = document.createElement('option');
  option.value = obj.Sigla;
  option.innerText = obj.Nome;
  states.appendChild(option);
}

if (location.search) {

  let url = new URLSearchParams(location.search);

  const tmp = document.querySelector('table');
  tmp && tmp.remove();

  const table = document.createElement('table');
  table.innerHTML = '<tr><th>Key</th><th>Value</th></tr>';

  for (const key of url.keys()) {
    const val = url.get(key);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${key}</td><td>${val}</td>`
    table.appendChild(tr);
  }

  divData.appendChild(table);

}

reset.addEventListener('click', function(){
  location.search = '';
});
