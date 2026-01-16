#!/bin/bash

#PRODUCTION
git reset --hard
git checkout master
git pull origin master

npm i yarn -g
yarn global add serve
yarn

# Environment variable ni o'rnatish (server IP ni o'zgartiring kerak bo'lsa)
export REACT_APP_API_URL=http://209.97.168.255:3003

yarn run build

pm2 start "yarn run start:prod" --name=ECOMMERCE-APP