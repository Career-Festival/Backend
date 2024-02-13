FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm ci
COPY ./src ./src
COPY ./public ./public
RUN npm run build
CMD ["npm", "start"]
