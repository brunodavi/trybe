// Objetos

player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,

  medals: {
    golden: 2,
    silver: 3
  }

}

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por`,
            `${player.bestInTheWorld.length} vezes`);

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);

console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver}`,
            `medalhas de prata`);

console.log();


// For/In

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
}


for (key in names) {
  console.log(`Olá, ${names[key]}`);
}

console.log();

let carro = {
  modelo: 'A3 Sedan',
  marca: 'Audi',
  ano: 2020
}

for (key in carro) {
  console.log(key, carro[key]);
}

console.log();


// Função

function sum(a, b) {
  return a + b
}

console.log(sum(5, 5));