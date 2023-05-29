# Build environment
FROM node:alpine as build

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN npm install --legacy-peer-deps
# Bundle app source
COPY . ./
RUN npm run export

# Production environment
FROM nginx:alpine
COPY --from=build /usr/src/app/out /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

