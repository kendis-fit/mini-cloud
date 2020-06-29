FROM node:12.16.3-alpine3.11 as build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]