FROM node:24-alpine

WORKDIR /app

COPY ./blog .

RUN npm install
RUN npm run build
