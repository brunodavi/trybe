let inputLocal = document.querySelector('#input-local');
let inputSession = document.querySelector('#input-session');

let listLocal = document.querySelector('#list-local');
let listSession = document.querySelector('#list-session');

function addListEvent(e) {
  if (e.key === 'Enter') {
    let arr = e.target.id.split('-');
    let value = e.target.value;
    e.target.value = '';

    if (arr[1] === 'local') {
      let key = `local_${localStorage.length}`
      localStorage.setItem(key, value);
      listDatas(localStorage, listLocal, 'local');
    }
    else {
      let key = `session_${sessionStorage.length}`
      sessionStorage.setItem(key, value);
      listDatas(sessionStorage, listSession, 'session');
    }
  }
}

function listDatas(storage, list, type) {
  list.innerText = '';

  for (let i = 0;  i < storage.length; i += 1) {
    let key = `${type}_${i}`;
    let value = storage[key];

    if (value !== undefined) {
      let li = document.createElement('li');
      li.innerText = value;
  
      li.onclick = function(e) {
        e.target.remove()

        if (type === 'local') {
          delete localStorage[key];
        }
        else {
          delete sessionStorage[key]
        }
      }

      li.style.cursor = 'pointer';
      list.appendChild(li);
    }

  }
}

inputLocal.addEventListener('keypress', addListEvent);
listDatas(localStorage, listLocal, 'local');

inputSession.addEventListener('keypress', addListEvent);
listDatas(sessionStorage, listSession, 'session');