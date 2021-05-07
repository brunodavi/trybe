// For & For/Of


// For

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i+=1) {
  console.log(groceryList[i]);
}

console.log();

// For/Of

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (n of names) {
  console.log(n);
}