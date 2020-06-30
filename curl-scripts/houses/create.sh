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
      "beds": "'"${BEDS}"'",
      "baths": "'"${BATHS}"'",
      "sqft": "'"${SQFT}"'",
      "askingprice": "'"${PRICE}"'",
      "closingdate": "'"${DATE}"'",
      "closingattorney": "'"${ATTORNEY}"'",
      "emdeposit": "'"${DEPOSIT}"'",
      "listingphone": "'"${PHONE}"'",
      "owner": "'"${OWNERID}"'"
    }
  }'

echo
