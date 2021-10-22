function random() {
  return Math.floor(Math.random() * 100 + 1);
}

function randomPars(repeat) {
  list = [];
  for (let i = 0; i < repeat; i += 1) {
    list.push(random());
  }

  return list;
}

module.exports = randomPars;
