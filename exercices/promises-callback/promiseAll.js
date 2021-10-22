const fs = require('fs');

function writeFiles(contents) {
  promises = [];
  contents.forEach((content, i) => {
    promises.push(fs.promises.writeFile(`file${i + 1}.txt`, content));
  });
  return promises;
}

async function readFiles(filenames) {
  contentFiles = filenames.map((filename) => (
    fs.promises.readFile(filename)
  ));
  return Promise.all(contentFiles);
}

async function promiseAll(filename, contents) {
  Promise.all(writeFiles(contents));
  filenames = fs.readdirSync('./');
  filenames = filenames.filter((file) => /file\d+\.txt/.test(file));

  contentFiles = (await readFiles(filenames)).join(' ');
  await fs.promises.writeFile(filename, contentFiles);
  return (await fs.promises.readFile(filename)).toString();
}

module.exports = promiseAll;
