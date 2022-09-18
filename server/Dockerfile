FROM node:14.2.0-alpine

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 5000