FROM node:13-alpine AS dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "npm", "run", "start" ]


FROM nginx:alpine AS production

COPY deploy/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY www/ .