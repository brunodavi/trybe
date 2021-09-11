const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, error) => {
    const animal = Animals.find((obj) => obj.name === name)
    if (animal) {
      return resolve(animal)
    }
    error('Nenhum animal com esse nome!')
  })
}

const findAnimalByAge = (age) => {
  return new Promise((resolve, error) => {
    const animal = Animals.find((obj) => obj.age === age)
    if (animal) {
      return resolve(animal)
    }
    error('Nenhum animal com essa idade!')
  })
}

const getAnimalByName = (name) => (
  findAnimalByName(name)
  .then(animal => animal)
);

const getAnimalByAge = (age) => (
  findAnimalByAge(age)
  .then(animal => animal)
);

module.exports = {
  getAnimalByName,
  getAnimalByAge
}