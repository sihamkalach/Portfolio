# Use Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /my-portfolio

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start Vite dev server on all network interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]