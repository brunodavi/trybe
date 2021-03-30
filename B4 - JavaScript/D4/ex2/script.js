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
    } else {
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


// 8 - Converter números romanos em números na array

function ronum(arr) {
  let ron = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  for (i in arr) {
    for (key in ron) {
      arr[i] = eval(`'${arr[i]}'.replace(/${key}/g, '${ron[key]}')`)
    }

    function int(str) {
      return parseInt(str)
    }

    let mt = arr[i].match(/[15]0*/g)
    let n = 0

    for (let i = 0; i < mt.length; i += 1) {
      if (mt[i+1] !== undefined) {

        if (int(mt[i]) >= int(mt[i+1])) {
          n += int(mt[i])
        }

        else {
          n -= int(mt[i])
        }

      }
      else {
        n += int(mt[i])
      }
    }

    arr[i] = n

  }

return arr

}

let arr = ronum(['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CM', 'M'])
console.log(arr);