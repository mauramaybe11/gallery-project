#!/bin/bash


curl ""
--include \
--request POST \
  --header "Content-type: application/json" \
   --header "Authorization: Bearer ${TOKEN}" \
  --data '{}'

echo