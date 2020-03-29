FROM node:current-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install

COPY server.js server.js

EXPOSE 3000 3500

ENV PORT 3000

CMD [ "npm", "start" ]
