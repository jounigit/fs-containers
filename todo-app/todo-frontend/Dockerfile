FROM node:24 AS base-stage
WORKDIR /usr/src/app

COPY . .

FROM base-stage AS test-stage
RUN npm ci
RUN npm test

FROM test-stage AS build-stage
ENV VITE_BACKEND_URL=http://localhost:3000/
RUN npm run build

FROM nginx:1.20-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html