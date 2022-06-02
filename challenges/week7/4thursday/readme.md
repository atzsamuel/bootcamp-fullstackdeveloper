# Deploying First Docker Container

## katacoda Link 🥋

[Create docker container](https://www.katacoda.com/courses/docker/deploying-first-container)
[Docker file solution](./containerImages.dockerfile)

# Description

In the first scenario, we discussed how you could start containers based on pre-existing images from the Docker Registry. This scenario explains how to build an image based on your requirements.

For this scenario, the container will be running a static HTML application using Nginx, a high-performance web server. In the future, we'll explain how to deploy other stacks such as Node.js or ASP.NET.

The machine name Docker is running on is called docker. If you want to access any of the services, then use docker instead of localhost or 0.0.0.0.

# Solution

# Step 1 - Running a container

we require NGINX to be configured and running on the system before we can deploy our static HTML files. As such we want to use NGINX as our base image.

```sh
 FROM <image-name>:<tag>
```

# Step 2 - Running Commands

COPY <src> <dest> allows you to copy files from the directory containing the Dockerfile to the container's image
use the COPY command to copy index.html into a directory called /usr/share/nginx/html

```sh
COPY index.html /usr/share/nginx/html/index.html
```

# Step 3 - Exposing Ports

You can define multiple ports on the single command, for example, EXPOSE 80 433 or EXPOSE 7000-8000
We want our web server to be accessible via port 80, add the relevant EXPOSE line to the Dockerfile.

```sh
EXPOSE 80
```

# Step 4 - Default Commands

If the command requires arguments then it's recommended to use an array, for example ["cmd", "-a", "arga value", "-b", "argb-value"]
The command to run NGINX is nginx -g daemon off;. Set this as the default command in the Dockerfile.

```sh
CMD ["nginx", "-g", "daemon off;"]
```

# Step 5 - Building Containers

After writing your Dockerfile you need to use docker build to turn it into an image
Using the docker build command to build the image. You can give the image a friendly name by using the -t <name> option.

```sh
$docker build -t my-nginx-image:latest
```

# Step 6 - Launching New Image

Launch an instance of your newly built image using either the ID result from the build command or the friendly name you assigned it.
NGINX is designed to run as a background service so you should include the option -d. To make the web server accessible, bind it to port 80 using p 80:80

```sh
$docker run -d -p 80:80 my-nginx-image:latest
```
