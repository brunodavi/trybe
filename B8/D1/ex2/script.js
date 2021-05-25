const newEmployees = () => {
  const gen = (nome) => ({
    nomeCompleto: nome,
    email: nome.replace(' ', '_').toLowerCase() + '@trybe.com'
  })

  const employees = {
    id1: gen('Pedro Guerra'),
    id2: gen('Luiza Drumond'),
    id3: gen('Carla Paiva')
  }

  return employees;
};

console.log(newEmployees().id1);
console.log(newEmployees().id2);
console.log(newEmployees().id3);
