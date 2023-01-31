FROM node:16.15.0

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install 

COPY . .

EXPOSE 4200

CMD ["npm", "start"]