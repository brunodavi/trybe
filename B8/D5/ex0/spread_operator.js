const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5, 6];

console.log(newArray);


const objects = {
  name: "Mateus",
  age: "26",
}

const newObject = {
  ...objects,
  new: true,
}

console.log(newObject);


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacate', 'Tomate', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Inhane', 'Maça', 'Pessego'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

