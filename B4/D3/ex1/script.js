let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (f of fruits) {
  sum += f
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('Valor menor que 16');
}