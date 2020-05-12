FROM node:12.16.3-alpine3.11 as build
WORKDIR /app

COPY . .
RUN npm install

CMD ["npm", "start"]