const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const { url } = req;
  res.status(200).send('\033[1;91mError\033[m');
});

app.listen(PORT, () => {
  console.log(`Escutando da porta: ${PORT}`);
});
