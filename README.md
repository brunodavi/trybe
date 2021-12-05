# Deploy

## Criando api no heroku

      mkdir heroku && cd heroku
      npm init -y

### Adicionar o `npm start` no package.json

      ...
      "scripts":
        "start": "node index.js",
      ...

### Escrever a api `index.js`

      const express = require('express');
      ...
      app.get('/', request);
      ...
      app.listen(PORT, startServer);

### Configurar a porta:

      const PORT = process.env.PORT || 3000

### Criar aplicação no heroku:

      heroku create

### Enviar

      git push heroku master

### Criar aplicação `React`

      npx create-react-app heroku-react-app
      cd heroku-react-app

> Depois é só realizar o mesmo processo de [Crair aplicação no heroku](#criar-aplicacao-no-heroku) e [Enviar](#enviar)

