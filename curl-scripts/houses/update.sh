#!/bin/bash

API="http://localhost:4741"
URL_PATH="/houses"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "house": {
      "description": "'"${DESCRIPTION}"'",
      "askingprice": "'"${PRICE}"'"
    }
  }'

echo
