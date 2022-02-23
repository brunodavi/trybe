#!/bin/bash

venv=`dirname ${0}`"/.venv"

start_venv() {
  source "${venv}/bin/activate"
}

create_venv() {
  python3 -m venv ${venv}
}

main() {
  if [ -d ${venv} ]
  then
    start_venv
  else
    create_venv
    start_venv
  fi
}

main
