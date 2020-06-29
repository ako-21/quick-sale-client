#!/bin/bash

API="http://localhost:4741"
URL_PATH="/houses"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "house": {
      "address": "'"${ADDRESS}"'",
      "description": "'"${DESCRIPTION}"'",
      "askingprice": "'"${PRICE}"'",
      "owner": "'"${OWNERID}"'"
    }
  }'

echo
