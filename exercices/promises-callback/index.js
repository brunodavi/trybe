const promiseAll = require('./promiseAll');
const promiseSum = require('./promiseSum');
const randomPars = require('./randomPars');
const simpsons = require('./simpsons');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function showExercise(returned, index) {
  returned = JSON.stringify(returned);
  console.log(`
Exercício ${index}
${returned}`);
  sleep(1000);
};

function ex(...callbacks) {
  callbacks.forEach((callback) => {
    callback()
  })
}

function ex1() {
  promiseSum(15, 2, 3)
    .then((returned) => showExercise(returned, 1))
    .catch((returned) => showExercise(returned, 1))
}

function ex2() {
  promiseSum(...randomPars(3))
    .then((returned) => showExercise(returned, 2))
    .catch((returned) => showExercise(returned, 2))
}

async function ex3() {
  showExercise(await promiseSum(...randomPars(3)), 3)
}

async function ex4() {
  showExercise(await simpsons.showAll(), 4.1);
  showExercise(await simpsons.getNameById(1), 4.2);
  showExercise(await simpsons.removeIds(10, 6), 4.3);
  showExercise(await simpsons.writeOnly('simpsonFamily.json', [1, 2, 3, 4]), 4.4);
  showExercise(await simpsons.addPerson('simpsonFamily.json', 'Nelson Muntz'), 4.5);
  showExercise(await simpsons.replacePerson('simpsonFamily.json', 'Nelson Muntz', 'Maggie Simpson'), 4.6);
}

async function ex5() {
  result = await promiseAll('fileAll.txt', ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'])
  showExercise(result, 5);
}

function main() {
  ex(ex1, ex2, ex3, ex4, ex5);
}

main();

