FROM docker.io/node:lts-alpine

WORKDIR /app

COPY . . 

RUN npm install --legacy-peer-deps

RUN npm run build

