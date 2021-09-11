const vogals = ['a', 'e', 'i', 'o', 'u'];
const number = ['1', '2', '3', '4', '5'];

function encode(str) {
  vogals.forEach((vogal, i) => {
    const re = RegExp(vogal, 'g');
    str = str.replace(re, number[i]);
  })
  return str;
}

function decode(str) {
  number.forEach((num, i) => {
    const re = RegExp(num, 'g');
    str = str.replace(re, vogals[i]);
  })
  return str;
}

module.exports = {
  encode,
  decode
}
