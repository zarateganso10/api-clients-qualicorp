FROM node:16

WORKDIR /usr/api

COPY package*.json ./

RUN npm ci --only=production

COPY . .

CMD [ "node", "src/server.mjs" ]