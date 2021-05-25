const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (obj, key, turn) => obj[key] = turn
addTurn(lesson2, 'turno', 'manhã');

const objLength = obj => Object.keys(obj).length
const listValues = obj => Object.values(obj)
const listKeys = obj => Object.keys(obj)
const objCount = obj => Object.keys(obj).length
const getValPosition = (obj, pos) => Object.values(obj)[pos]
const checkPair = (obj, key, val) => obj[key] === val

const allLessons = {}

console.log(objLength(lesson1),
listValues(lesson1),
listKeys(lesson1));
console.log();

Object.assign(allLessons, {lesson1: lesson1}, {lesson2: lesson2}, {lesson3: lesson3});
console.log(allLessons);
console.log();

console.log(objCount(allLessons));
console.log();

console.log(getValPosition(lesson1, 0));
console.log();

console.log(checkPair(lesson3, 'turno', 'noite'));
console.log(checkPair(lesson3, 'materia', 'Maria Clara'));
console.log();

function watchStudents(obj) {
  let num = 0;
  for (i of [1, 2, 3]) {
    num += obj[`lesson${i}`].numeroEstudantes;
  }
  return num
}

function createReport(obj, val) {
  for (i of [1, 2, 3]) {
    if (obj[`lesson${i}`].professor === val) {
      return obj[`lesson${i}`]
    }
  }
  return false
}

console.log(watchStudents(allLessons));
console.log();

console.log(createReport(allLessons, 'Maria Clara'));
console.log();
