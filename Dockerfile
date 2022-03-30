FROM node:16.14.2-alpine3.14
WORKDIR /app
COPY package.json ./
COPY ./src ./src
RUN npm install
USER node
CMD ["node", "./src/index.js"]