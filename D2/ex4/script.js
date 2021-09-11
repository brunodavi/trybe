const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

for (arr of pairKeyValue) {
  for (val of arr) {
    console.log(val);
  }
  console.log();
}