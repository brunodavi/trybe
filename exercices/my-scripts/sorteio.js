const { question, questionInt } = require('readline-sync');

function sorteio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function game() {
  let meuNumero;
  const numeroSorteado = sorteio(0, 10);

  while (true) {
    meuNumero = questionInt("Selecione um número de 0 á 10\n> ");
    console.log(numeroSorteado);

    if (meuNumero >= 0 && meuNumero <= 10) {
      break
    }

    console.log("Dá uma lida melhor...");
  }

  if (meuNumero === numeroSorteado) {
    console.log(`Parabéns!!! você acertou o número era ${numeroSorteado}`);
  } else {
    console.log(`Infelizmente não foi dessa vez, o número do sorteio era ${numeroSorteado} e o seu é ${meuNumero}`);
  }
}

function main() {
  while (true) {
    game();
    const continueGame = question("Gostaria de tentar mais uma vez? [S/n] ");

    if (!continueGame || continueGame.toUpperCase()[0] === "S") {
      continue
    }
    break
  }
}

main();
