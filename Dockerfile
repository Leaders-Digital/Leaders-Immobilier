# Use an official Node.js LTS as the base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock first for dependency installation
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all source files
COPY . .

# Set environment variables at build time
ARG REACT_APP_API_URL
ARG REACT_APP_API_URL_IMAGES
ARG REACT_APP_API_KEY   

# Build the React app
RUN REACT_APP_API_URL=$REACT_APP_API_URL REACT_APP_API_URL_IMAGES=$REACT_APP_API_URL_IMAGES REACT_APP_API_KEY=$REACT_APP_API_KEY yarn build

# Use a minimal Node.js runtime for serving the app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install serve globally
RUN yarn global add serve

# Copy the built React files from the previous stage
COPY --from=builder /app/build /app/build

# Expose port 3000
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "build", "-l", "3000"]
