#!/bin/bash

if [ $# -eq 0 ]
then
  echo 'Não existem argumentos'
  exit
fi

BRANCHS="$(grep -Pom 1 "$1" <<< $(git branch -a))"

if [ "$1" != "$BRANCHS" ]
then
  echo "Criando branch com a pasta $1/..."
  git checkout -b "$1" B0
  git checkout master -- "$1/"
  git commit -m "Branch $1"
  git push -u origin "$1"
else
  echo 'Essa branch já existe'
fi

