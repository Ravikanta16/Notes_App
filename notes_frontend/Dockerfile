FROM node:20-Alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY ..
RUN npm run build