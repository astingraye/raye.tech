FROM node:18

EXPOSE 80 443 2269

WORKDIR /code

RUN npm run build

RUN npm install -g http-server

WORKDIR /code/dist

CMD http-server -p 2269 -a 0.0.0.0