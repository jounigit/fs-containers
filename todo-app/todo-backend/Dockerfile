FROM node:24-alpine

RUN apk add --no-cache curl

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ENV NODE_ENV=production
ENV DEBUG=todo-backend:*

USER node

EXPOSE 3000
CMD ["npm", "start"]