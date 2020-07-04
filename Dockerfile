FROM nginx:alpine

COPY deploy/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY www/ .