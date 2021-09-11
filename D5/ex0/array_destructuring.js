const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada



const saudacoes = ['Olá', (saudacao) => saudacao];
const [ola, sau] = saudacoes;

console.log(sau(ola));



const array = ["gato", "água", "arroz"];
const [a, b, c] = array;

console.log(a, b, c);



let np = [1, 3, 5, 6, 8, 10, 12];

const [n1, n2, n3, n4] =
      [np[3], np[4], np[5], np[6]];

np = [n1, n2, n3, n4];

console.log(np);

