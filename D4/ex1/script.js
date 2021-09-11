let config = document.querySelector('#config');
let paragraph = document.querySelector('p');

function updateStorage() {
  for (input of config.childNodes) {
    let id = input.id;
    let unset = localStorage[id] === undefined;
    let val = unset ? input.value : localStorage[id];
    val = val + ''

    input.value = val;
    if (val.match(/^\d+$/)) {
      val = val + 'px';
    }
    paragraph.style[id] = val;
  }
}

function eventInput(e) {
  let input = e.target
  let id = input.id
  let val = input.value;
  localStorage[id] = val;
  updateStorage();
}

config.addEventListener('change', eventInput);
updateStorage();
