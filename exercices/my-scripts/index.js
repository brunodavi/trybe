function menu() {
  console.log(`
Ctrl-C para Sair

[1] - IMC
[2] - Velocidade
[3] - Sorteio
`);
}

function input() {
  const { question } = require("readline-sync");
  switch (question("Selecione uma das três opções\n> ")) {
    case "1":
      require('./imc');
      break;
    case "2":
      require('./velocidade');
      break;
    case "3":
      require('./sorteio');
      break;
  }
}

function main() {
  while (true) {
    menu();
    input();
  }
}

main();
