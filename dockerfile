FROM node:latest

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the application's port
EXPOSE 3001

# Start the application
CMD ["npm", "run", "start:prod"]
