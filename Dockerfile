# frontend/Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the React app
RUN npm run build

# Install serve to serve static files
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]
