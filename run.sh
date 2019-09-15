#!/usr/bin/env bash

if [[ -d "./app" ]] && [[ -f "./app/speechshifter.py" ]]; then
  cd app || exit
  export FLASK_APP=speechshifter.py
  flask run
else
  echo "CANNOT FIND \"app\" directory"
fi
