FROM node:24

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV DEBUG=todo-backend-dev:*

CMD [ "npm", "run", "dev" ]