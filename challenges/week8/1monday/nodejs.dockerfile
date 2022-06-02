# This is your Editor pane. Write the Dockerfile here and 
# use the command line to execute commands
FROM node:10-alpine
RUN mkdir -p /src/app
WORKDIR /src/app

COPY package.json /src/app/package.json
RUN npm install

COPY . /src/app
EXPOSE 3000
CMD ["npm","start"]