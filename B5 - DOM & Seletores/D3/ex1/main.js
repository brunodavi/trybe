const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function selectTech(event) {
  let techs = document.querySelectorAll('.tech');
  for (tech of techs) {
    tech.removeAttribute('class');
  }

  event.target.className = 'tech';
}

function changeText() {
  document.querySelector('.tech').innerText = input.value;
}

function redirectPage() {
  window.location.href = 'https://brunodavi.github.io/profile/'
}

function changeColorGreen(event) {
  event.target.style.color = 'green';
}
function changeColorWhite(event) {
  event.target.style.color = 'white';
}

divUm.addEventListener('click', selectTech);
divDois.addEventListener('click', selectTech);
divTres.addEventListener('click', selectTech);

input.addEventListener('change', changeText);

myWebpage.addEventListener('dblclick', redirectPage);

myWebpage.addEventListener('mouseover', changeColorGreen);
myWebpage.addEventListener('mouseleave', changeColorWhite);


// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.