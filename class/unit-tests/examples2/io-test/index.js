const fs = require('fs');

const leArquivo = require('./leArquivo');
const readline = require('readline-sync');

function lsChoice(dir='./') {
  dir = dir.replace(/\/+$/, '');
  try {
    list = fs.readdirSync(dir);
  } catch (err) {
    console.log(err.message);
    return null;
  }

  console.log('Selecione o arquivo para ser lido')

  list.forEach((item, i) => {
    if (/\.txt$/.test(item)) {
      console.log(`[${i + 1}] - ${item}`);
    }
  });

  choice = readline.questionInt('> ');
  filename = list[choice - 1];

  return `${dir}/${filename}`;
}

function main() {
  const choice = lsChoice('./texts/');
  const filename = choice.replace(/\/+$/, '');

  const text = leArquivo(choice);

  console.log(`Arquivo ${filename}:\n`);
  console.log(text);
}

main();

