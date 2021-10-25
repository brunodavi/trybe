function posneg(num) {
  if (typeof num === 'number') {
    if (num > 0) {
      return 'positivo'
    } else if (num < 0) {
      return 'negativo'
    } else {
      return 'neutro'
    }
  } else {
    return 'o valor deve ser um número'
  }
}

module.exports = posneg;

