function sortNumber(num) {
  const ran = Math.floor(Math.random() * 5) + 1;
  return (ran === num) ? "Parabéns você ganhou" : "Tente novamente";
}

let str = sortNumber(1);
console.log(str);
