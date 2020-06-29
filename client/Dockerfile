FROM node:12.16.3-alpine3.11 as build
WORKDIR /app
ARG REACT_APP_API

COPY package*.json ./
RUN npm install

COPY . .
RUN REACT_APP_API=${REACT_APP_API} npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
