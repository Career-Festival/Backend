FROM node:20-alpine
RUN npm install
COPY package*.json ./
COPY ./src ./src
COPY ./public ./public
RUN npm run build
CMD ["npm", "start"]
