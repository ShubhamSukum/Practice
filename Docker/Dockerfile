FROM alpine

RUN apk add --update nodejs npm
RUN apk add --update npm

COPY main.js main.js
COPY package-lock.json package-lock.json
COPY package.json package.json

RUN npm install

ENTRYPOINT ["node","main.js"]