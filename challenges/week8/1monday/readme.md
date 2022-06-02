# Dockerizing Node.js applications

## katacoda Link 🥋

[Dockerizing Node.js applications](https://www.katacoda.com/courses/docker/3)--
[Docker file solution](./nodejs.dockerfile)

# Description

This scenario continues to explore how to build and deploy your applications as a Docker container. The previous scenario covered deploying a static HTML website. This scenario explores how to deploy a Node.js application within a container.

The environment is configured with access to a personal Docker instance, and the code for a default Expressjs application is in the working directory. To view the code use ls and cat <filename> or use the editor.

The machine name Docker is running on is called docker. If you want to access any of the services then use docker instead of localhost or 0.0.0.0.

# Solution

# Step 1 - Base Image

Define Base Environment
Set the FROM <image>:<tag>, RUN <command> and WORKDIR <directory> on separate lines to configure the base environment for deploying your application

```sh
FROM node:10-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
```

# Step 2 - NPM Install

With NPM we only want to re-run npm install if something within our package.json file has changed. If nothing has changed then we can use the cache version to speed up deployment. By using COPY package.json <dest> we can cause the RUN npm install command to be invalidated if the package.json file has changed. If the file has not changed, then the cache will not be invalidated, and the cached results of the npm install command will be used.

```sh
COPY package.json /src/app/package.json
RUN npm install
```

# Step 3 - Configuring Application

We can copy the entire directory where our Dockerfile is using COPY <dest dir>
Once the source code has been copied, the ports the application requires to be accessed is defined using EXPOSE <port>
Finally, the application needs to be started. One neat trick when using Node.js to use the <npm start> command. This looks in the
package.json file to know how to launch the application saving duplication of commands

```sh
COPY . /src/app
EXPOSE 3000
CMD ["npm","start"]
```

# Step 4 - Building & Launching Container

For launch the application inside the container we first need to build an image
`Example: Build & Launch`

```sh
#The command to build the image is:
$docker build -t my-nodejs-app .
#The command to launch the built image is:
$docker run -d --name my-running-app -p 3000:3000 my-nodejs-app
#The command for Testing Container is:
$curl http://docker:3000
```

# Step 5 - Environment Variables

With Docker, environment variables can be defined when you launch the container. For example with Node.js applications,
you should define an environment variable for <NODE_ENV> when running in production.
Using -e option, you can set the name and values as -e NODE_ENV=production

```sh
$docker run -d --name my-production-running-app -e NODE_ENV=production -p 3000:3000 my-nodejs-app
```

[DockerFile](nodejs.dockerfile)
