FROM node:12.16.3-alpine3.11 as build
WORKDIR /app
ARG REACT_APP

COPY . .
RUN npm install

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
