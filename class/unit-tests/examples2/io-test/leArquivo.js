const fs = require('fs');

function leArquivo(filename) {
  try {
    const buffer = fs.readFileSync(filename);
    return buffer.toString();
  } catch {
    return null;
  }
}

module.exports = leArquivo;
