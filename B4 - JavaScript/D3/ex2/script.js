let n = 7;
let s = '';
let a = [];

// 2
for (let i = 0; i < n; i += 1) {
  s += '*'
  console.log(s);
}

console.log();

// 1
for (let i = 0; i < n; i += 1) {
  console.log(s);
}

console.log();

// 3

for (let i = 0; i < n; i += 1) {
  a.push(' ')
}

for (let i = n - 1; i >= 0; i -= 1) {
  a[i] = '*'
  console.log(a.join(''));
}

console.log();

// 4
s = '';
a = [];

for (let i = 0; i < n; i += 1) {
  s += '*'
}

// Desisti de usar apenas for, vou ter que apelar
// usando regex

for (let i = 0; i < n; i += 1) {
  a.push(s)
  s = s.replace(/^(\s*)\*|\*(\s*)$/g, '$1 $2');
}

for (let i = n - 1; i >= 0; i -= 1) {
  if (a[i].match(/\*/g) !== null) {
    console.log(a[i]);
  }
}

console.log();

// 5 

for (let i = n - 1; i >= 0; i -= 1) {
  if (a[i].match(/\*/g) !== null) {

    let count = a[i].match(/\*/g).length
    let spaces = ''

    if (count > 1 && count < n) {
      for (let i = count - 2; i > 0; i -= 1) {
        spaces += ' '
      }
    }

    console.log(a[i].replace(/(\s\*)\*+(\*\s)/g, `$1${spaces}$2`));

  }
}

console.log();

// 6
let num = 0;

for (let i = 1; i <= n; i += 1) {
  if (i % 2 === 0) {
    num += 1
  }

  if (num > 2) {
    console.log('É um número primo');
    break
  }

  if (num <= 2 && i === n) {
    console.log('Não é um número primo');
  }

}
