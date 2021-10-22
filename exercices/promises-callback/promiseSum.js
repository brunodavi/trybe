function checkNumbers(...items) {
  return items.some((item) => typeof item !== 'number')
}

function promiseSum(a, b, c) {
  return new Promise((resolve, reject) => {
    if (checkNumbers(a, b, c)) reject('Informe apenas números');

    result = (a + b) * c
    if (result < 50) reject('Valor muito baixo');

    resolve(result);
  })
}

module.exports = promiseSum

