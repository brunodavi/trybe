// Tradicional

// -- Nomeada

function func() {
  return 2 + 2
}

console.log(func());

// -- Anonima

console.log(function() {
  return 2 + 2
}());


// Arrow Function

// -- Nomeada

const func = () => {
  return 2 + 2
}

console.log(func());

// -- Anonima

console.log((() => {
  return 2 + 2
})());

// -- Simplificada

console.log((() => 2 + 2)());