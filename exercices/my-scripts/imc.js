function imc(peso, altura) {
 return (peso / Math.pow(altura, 2)).toFixed(2);
}

function tableIMC() {
  const table = `
| IMC                                       | Situação                  |
| ----------------------------------------- | ------------------------- |
| Abaixo de 18,5                            | Abaixo do peso (magreza)  |
| Entre 18,5 e 24,9                         | Peso normal               |
| Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
| Entre 30,0 e 34,9                         | Obesidade grau I          |
| Entre 35,0 e 39,9                         | Obesidade grau II         |
| 40,0 e acima                              | Obesidade graus III e IV  |
`;
  console.log(table);
}

function main() {
  const { questionFloat } = require('readline-sync')
  
  const peso = questionFloat("Qual o seu peso\n> ");
  const altura = questionFloat("Qual a sua altura\n> ");

  const result = imc(peso, altura);

  tableIMC();
  console.log(`Resultado: ${result}`);
}

main();
