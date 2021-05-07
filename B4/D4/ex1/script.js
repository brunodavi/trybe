// 1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(info.personagem);
console.log();


// 2
info['recorrente'] = 'Sim';
console.log(info.recorrente);
console.log();

// 3
for (key in info) {
  console.log(key);
}

console.log();

// 4
for (key in info) {
  console.log(info[key]);
}

console.log();

// 5 
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (key in info) {
  console.log(`${info[key]} e ${info2[key]}`);
}