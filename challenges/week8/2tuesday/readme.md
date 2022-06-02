# Optimise Builds With Docker OnBuild

## katacoda Link 🥋

[Optimise Builds With Docker OnBuild](https://www.katacoda.com/courses/docker/4)--

# Description

In this scenario, we'll look at how you can optimise using the OnBuild instruction.
The environment has been configured with an example Node.js application however the aproaches can be applied to any image.
The machine name Docker is running on is called docker. If you want to access any of the services, then use <docker instead of localhost or 0.0.0.0>

# Solution

# Step 1 - OnBuild

The result is you can delay your execution to be dependent on the application which you're building, for example the application's package.json file.
Below is the Node.js OnBuild Dockerfile. Unlike in our previous scenario the application specify commands have been prefixed with ONBUILD.

```sh
FROM node:7
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD COPY . /usr/src/app
CMD [ "npm", "start" ]
```

The result is that we can build this image but the application specific commands won't be executed until the built image is used as a base image. They'll then be executed as part of the base image's build

# Step 2 - Application Dockerfile

The advantage of creating OnBuild images is that our Dockerfile is now much simpler and can be easily re-used across multiple projects without having to re-run the same steps improving build times.

```sh
FROM node:7-onbuild
EXPOSE 3000
```

# Step 3 - Building & Launching Container

The Dockerfile from the previous step has been created for you. Building the images based on the OnBuild docker file is the same as before. The OnBuild commands will be executed as if they were in the base Dockerfile.

```sh
$docker build -t my-nodejs-app .
$docker run -d --name my-running-app -p 3000:3000 my-nodejs-app
# For testing Container
$curl http://docker:3000
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
