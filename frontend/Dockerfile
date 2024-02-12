FROM node:20-allpine
WORKDIR /app
RUN npm install
COPY package*.json ./
COPY ./src ./src
COPY ./public ./public
RUN npm run build
CMD ["npm", "start"]
