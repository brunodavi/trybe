function velocidade(distancia, tempo) {
  return distancia / tempo
}

function main() {
  const { questionInt } = require("readline-sync");

  const distancia = questionInt("Qual a distancia percorrida? (metros)\n> ");
  const tempo = questionInt("Qual o tempo da distancia percorrida? (segundos)\n> ");

  const vel = velocidade(distancia, tempo);
  console.log(`Você estava á: ${vel}m/s`);
}

main();
