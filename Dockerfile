FROM node:14
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
EXPOSE 8000
CMD ["npm", "start"]