ARG NODE_VERSION=20.10.0
ARG NGINX_VERSION=1.23-alpine

################################################################################
# Base stage: Use node image to install dependencies and build the app.
FROM node:${NODE_VERSION}-alpine as build

WORKDIR /usr/src/app

# Install dependencies and build the app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

################################################################################
# Final stage: Use Nginx to serve the React app in production.
FROM nginx:${NGINX_VERSION} as final

# Copy the build output from the build stage to Nginx's web directory.
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Copy a custom Nginx configuration file if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port Nginx is using.
EXPOSE 80

# Run Nginx (it's the default command, so this step is optional)
CMD ["nginx", "-g", "daemon off;"]
