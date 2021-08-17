#!/bin/bash

sed '0,/- \[ \]/s//- \[x\]/' -i README.md
