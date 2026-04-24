FROM node:24-alpine AS deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

FROM deps AS test-stage
COPY . .
RUN npm test

FROM deps AS build-stage
COPY . .
ENV VITE_BACKEND_URL=/api/
RUN npm run build

FROM nginx:1.20-alpine AS final
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80