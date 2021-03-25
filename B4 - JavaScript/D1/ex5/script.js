const a = 5;
const b = 8;
const c = 13;

function title(str) {
    console.log(`\n\n${str}\n`);
}

function cal(a, b) {

    title("Calculando...")

    console.log(`${a} + ${b} = ${a + b}`);
    console.log(`${a} - ${b} = ${a - b}`);
    console.log(`${a} * ${b} = ${a * b}`);
    console.log(`${a} / ${b} = ${a / b}`);
    console.log(`${a} % ${b} = ${a % b}`);
    console.log(`${a} ** ${b} = ${a ** b}`);

}

function greater2(a, b) {

    title(`Qual o maior entre ${a} e ${b}?`);

    if (a > b) {
        console.log(`${a} é o maior entre eles...`)
        return a
    } else if (b > a) {
        console.log(`${b} é o maior entre eles...`)
        return b
    } else {
        console.log("Esses 2 números são iguais...")
        return null
    }

}


function greater3(a, b, c) {

    title(`Qual o maior entre ${a}, ${b} e ${c}?`);

    if (a > b && a > c) {
        console.log(`O ${a} é o maior entre eles...`)
        return a
    } else if (b > a && b > c) {
        console.log(`O ${b} é o maior entre eles...`)
        return b
    } else if (c > a && c > b) {
        console.log(`O ${c} é o maior entre eles...`)
        return c
    } else {
        console.log(`Esses 3 números são iguais...`)
        return null
    }

}

function numVal(a) {

    title(`O valor ${a} é?`);

    if (a > 0) {
        console.log('Positivo')
        return 'positive'
    } else if (a < 0) {
        console.log('Negativo')
        return 'negative'
    } else {
        console.log('Zero')
        return 'zero'
    }

}


function angle(a, b, c) {

  // Eu não sei fazer esse código de triangulo https://www.vivaolinux.com.br/script/Existencia-de-triangulo-em-Python-3

    title(`O ângulo do triangulo com ${a} ${b} ${c}`)

    if (a <= 0 || b <= 0 || c <= 0) {
        console.log("Lados nulos ou negativos nao sao aceitos.")
        return false
    }

    if (a >= b + c || b >= c + a || c >= a + b) {
        console.log("Triangulo inexistente.")
        return false
    }

    if (a === b && b === c) {
        console.log("Triangulo equilátero.")
        return true
    } else if (a == b || b == c || c == a) {
        print("Triangulo isósceles.")
        return true
    } else {
        print("Triangulo escaleno.")
        return true
    }

}


function nameCheck(toy) {
  toy = toy.toLowerCase()
  title(toy)

  switch(toy) {
    case('king'):
    console.log('square')
    return 'square';

    case('queen'):
    console.log('star')
    return 'star'

    case('rook'):
    console.log('cross')
    return 'cross'

    case('bishop'):
    console.log('diagonal')
    return 'diagonal'

    case('knight'):
    console.log('L')
    return 'L'

    case('pawn'):
    console.log('front')
    return 'front'
  }
}

function fromAF(note, percent) {
  title(`Troca da ${note} para ${percent}%`)
  pct = note / 100 * percent

  if (pct >= 90) {
    return 'A'
  }
  else if (pct >= 80) {
    return 'B'
  }
  else if (pct >= 70) {
    return 'C'
  }
  else if (pct >= 60) {
    return 'D'
  }
  else if (pct >= 50) {
    return 'E'
  }
  else if (pct < 50) {
    return 'F'
  }
  else {
    return 'error'
  }
}