// 1 - Acesse o elemento elementoOndeVoceEsta .
let a = document.querySelector('#elementoOndeVoceEsta');

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let b = a.parentNode;
b.style.color = 'red';

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector('#primeiroFilhoDoFilho').innerText = 'Texto do primeiroFilhoDoFilho';

// 4 - Acesse o primeiroFilho a partir de pai.
b.firstElementChild;

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
a.previousElementSibling;

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
a.parentElement.innerText;

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
a.nextElementSibling;

// 8 - Agora acesse o terceiroFilho a partir de pai.
b.children[2];

// 9 - Crie um irmão para elementoOndeVoceEsta.
function createTag(tag, text='') {
  let element = document.createElement(tag);
  element.innerText = text;
  return element;
}

b.appendChild(createTag('em', 'irmão'));

// 10 - Crie um filho para elementoOndeVoceEsta
a.appendChild(createTag('b', 'pai'));

// 11 - Crie um filho para primeiroFilhoDoFilho.
a.firstElementChild.appendChild(createTag('sub', 'filhoDoFilho'));

// 12 - A partir desse filho criado, acesse terceiroFilho.
b.children[2].appendChild(createTag('sup', 'terceiro'));

// 13 - Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.
document.body.firstElementChild.remove()
document.body.appendChild(b);
