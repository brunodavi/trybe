echo -n 'Chave publica: '
read PUBLIC

echo -n 'Chave privada'
read PRIVATE


echo -n 'Nome da maquida pm2: '
read PM2_NAME

echo -n 'Nome do projeto heroku: '
read HEROKU_NAME

heroku config:set PM2_PUBLIC_KEY="$PUBLIC" PM2_SECRET_KEY="$PRIVATE" PM2_MACHINE_NAME="$PM2_NAME" --app "$HEROKU_NAME"
