let n = 5;
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

// Desisti de usar apenas for vou ter que apelar
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
