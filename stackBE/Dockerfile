FROM node:14-alpine

# Create app directory
WORKDIR /usr/backend-nhom22

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "node", "index.js" ]


# FROM node:16.13.0-alpine
# RUN mkdir -p /home/node/src
# COPY . /home/node/src
# COPY .env /home/node/src/.env
# WORKDIR /home/node/src
# RUN npm install
# EXPOSE 5000
# ENTRYPOINT [ "node", "index.js" ]