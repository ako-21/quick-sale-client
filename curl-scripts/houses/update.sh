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
    "beds": "'"${BEDS}"'",
    "baths": "'"${BATHS}"'",
    "sqft": "'"${SQFT}"'",
    "askingprice": "'"${PRICE}"'",
    "closingdate": "'"${DATE}"'",
    "closingattorney": "'"${ATTORNEY}"'",
    "emdeposit": "'"${DEPOSIT}"'",
    "listingphone": "'"${PHONE}"'"
  }
}'

echo
