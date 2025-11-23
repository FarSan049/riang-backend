FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Jangan jalankan prisma atau node di build time.
# Biarkan docker-compose yang atur command-nya.
