function hydrate(str) {
  const match = str.match(/\d+/g);
  const count = match.reduce((r, cup) => (
    r + parseInt(cup)
  ), 0);
  return (count > 1)
  ? `${count} copos de água`
  : `${count} copo de água`
}

module.exports = hydrate;