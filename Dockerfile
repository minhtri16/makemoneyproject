# Build stage
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Build the Angular application
RUN npm run build -- --configuration production

# Production stage
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf 
# Copy the built Angular app from the build stage
COPY --from=build /app/dist/fe-project /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
