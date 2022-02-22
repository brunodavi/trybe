#!/bin/bash

venv=`dirname ${0}`"/.venv"

[ ! -f ${venv} ] && python3 -m venv ${venv} && source "${venv}/bin/activate"
