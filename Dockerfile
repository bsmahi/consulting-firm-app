FROM node:18-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /consulting-firm-app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]
