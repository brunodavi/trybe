const readJSON = require('./readJSON');
const fs = require('fs');

simpsons = readJSON('./simpsons.json');

async function showAll() {
  return idName = simpsons.map(({id, name}) => `${id} - ${name}`).join('\n');
}

async function getNameById(id) {
  try {
    return simpsons.find((item) => item.id === `${id}`);
  } catch (err) {
    console.log("id não encontrado");
  }
}

async function removeIds(...ids) {
  return simpsons.filter(({id}) => !ids.includes(Number(id)));
}

async function writeOnly(filename, ids) {
  json = simpsons.filter(({id}) => ids.includes(Number(id)));
  fs.writeFileSync(filename, JSON.stringify(json));
  return `${filename} criado com sucesso`;
}

async function addPerson(filename, newName) {
  try {
    json = readJSON(filename);
    containName = json.some(({name}) => name === newName);

    if (containName) {
      throw new Error('Esse personagem já existe');
    }

    person = simpsons.find(({name}) => name === newName);
    json.push(person);

    fs.writeFileSync(filename, JSON.stringify(json));
    return `${filename} --> ${newName} - Adicionado`;
  } catch (err) {
    console.log(err.message);
  }
}

async function replacePerson(filename, oldName, newName) {
  try {
    index = 0;
    json = readJSON(filename);

    json.forEach(({name}, i) => {
      if (name === oldName) {
        index = i;
      }
    });

    json[index]['name'] = newName;

    fs.writeFileSync(filename, JSON.stringify(json));
    return `${filename} ${oldName} --> ${newName} - Substituído`;
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  showAll,
  getNameById,
  removeIds,
  writeOnly,
  addPerson,
  replacePerson,
}
