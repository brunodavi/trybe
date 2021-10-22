const fs = require('fs');

function readJSON(filename) {
    try {
      const text = fs.readFileSync(filename);
      return JSON.parse(text);
    } catch (err) {
      console.log(err.message);
    }
  }

module.exports = readJSON;

