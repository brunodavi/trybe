const fs = require('fs');

function allStrings(...vals) {
  return vals.every((val) => typeof val === 'string')
}

function writeFile(filename, content) {
  if (allStrings(filename, content)) {
    try {
      fs.writeFileSync(filename, content);
      return 'ok'
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }
  return 'os dois parâmetros precisam ser do tipo "string"'
}

module.exports = writeFile;

