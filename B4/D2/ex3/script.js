let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num = 0;

// 1
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);
console.log(numbers[8]);
console.log(numbers[9]);
console.log();

// 2
for (n of numbers) {
  num += n
}

console.log(num);
console.log();

// 3
console.log(num / numbers.length);
console.log();

// 4
if (num / numbers.length > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

console.log();

// 5
num = 0;

for (n of numbers) {
  if (n > num) {
    num = n;
  }
}

console.log(num);
console.log();

// 6
num = 0;

for (n of numbers) {
  if (n % 2 !== 0) {
    num += 1;
  }
}

if (num > 0) {
  console.log(num, 'ímpar(es) encontrado(s)');
} else {
  console.log('nenhum valor ímpar encontrado');
}

console.log();

// 7
num = 0

for (n of numbers) {
  if (numbers[0] === n) {
    num = n
  } else if (n < num) {
    num = n
  }
}

console.log(num);
console.log();

// 8
let arr = []
for (let i = 0; i <= 25; i += 1) {
  arr.push(i)
}

console.log(arr);
console.log();

// 9
for (n of arr) {
  console.log(n / 2);
}

console.log();

// Bônus 3
arr = []
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i+1] !== undefined) {
        arr.push(numbers[i] * numbers[i+1])
    }
    else {
        arr.push(numbers[i] * 2)
    }
}

console.log(arr);
console.log();

// Bônus 1
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);
console.log();

// Bônus 2
arr = []
for (let i = numbers.length - 1; i >= 0; i -= 1) {
  arr.push(numbers[i])
}

console.log(arr);
console.log();