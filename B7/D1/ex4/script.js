const fac = x => {
  let f = x
  for (let i = 1; i < x; i += 1) {
    f *= i;
  }
  return (x) ? f : 1
}

const lastWord = str => {
  str = str.split(' ');
  c = str.length - 1;
  return str[c];
}

const newWord = str => `Tryber ${str} aqui!`;

const listFav = (str, list) => {
  list = list.join('\n  ');
  return `${str} Minhas cinco principais habilidades são:
  ${list}`
}

document.body.addEventListener('click', (e) => {
  const button = e.target;
  const number = parseInt(button.value)+1;
  button.value = number;
})
