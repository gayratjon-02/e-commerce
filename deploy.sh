#!/bin/bash

#PRODUCTION
git reset --hard
git checkout master
git pull origin master

npm i yarn -g
yarn global add serve
yarn

# Environment variable ni o'rnatish
export REACT_APP_API_URL=https://exclusiveshop.app

yarn run build

pm2 start "yarn run start:prod" --name=ECOMMERCE-APP