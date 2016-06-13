FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/user-entity-microservice
WORKDIR /usr/src/user-entity-microservice

# Install app dependencies
COPY package.json /usr/src/user-entity-microservice
RUN npm install

# Bundle app source
COPY . /usr/src/user-entity-microservice

CMD [ "npm", "start" ]
		
