# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app



# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY entry.sh /entry.sh

# Make the entry script executable
RUN chmod +x /entry.sh
# Install project dependencies
RUN npm install


# Copy the entire project to the working directory
COPY . .

# Build your React application (you may need to adjust the script name)
RUN chmod +x /entry.sh
RUN npm run build

# EXPORT NODE_OPTIONS=--openssl-legacy-provider
# Expose the port your app will run on (usually 3000)
EXPOSE 3001

# Define the command to start your application (modify as needed)
CMD ["npm", "start"]
