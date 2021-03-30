// 1 - Verificar se é um palíndromo e retornar true/false

function isPalin(str) {
  let palin = ''
  for (let i = str.length - 1; i >= 0; i -= 1) {
    palin += str[i]
  }

  return str === palin
}


// 2 - Retornar o índice do maior elemento da array

function indGreater(arr) {
  let greater = 0
  for (num of arr) {
    if (num > greater) {
      greater = num
    }
  }

  return arr.indexOf(greater)
}


// 3 - Retornar o índice do menor elemento da array

function indLess(arr) {
  let less = 0
  for (i in arr) {
    if (arr[i] < less || i === 0) {
      less = arr[i]
    }
  }

  return arr.indexOf(less)
}


// 4 - Retornar o índice do elemento com mais letras da array

function manyLetters(arr) {
  let ml = '';
  for (str of arr) {
    if (str.length > ml.length) {
      ml = str
    }
  }

  return arr.indexOf(ml)
}


// 5 - Retorne o número que mais se repete na array

function intRepeat(arr) {
  let objRepeater = {}
  let more = 0

  for (n of arr) {
    if (objRepeater[`${n}`] === undefined) {
      objRepeater[`${n}`] = 1
    }
    else {
      objRepeater[`${n}`] += 1
    }
  }

  delete objRepeater.undefined

  for (key in objRepeater) {
    if (objRepeater[key] > more) {
      more = objRepeater[key]
      result = key
    }
  }

  return parseInt(result)
}


// 6 - Retorne o valor de 1 á N somados

function addUp(N) {
  let add = 0
  for (let i = 1; i <= N; i += 1) {
    add += i
  }

  return add
} 


// 7 - Verifique se end é equivalente ao final de start

function checkEnd(start, end) {
  let re = eval(`/${end}$/g`)
  return start.match(re) !== null
}

let b = checkEnd('trybe', 'try')
console.log(b);