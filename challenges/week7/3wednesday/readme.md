# Deploying First Docker Container

## katacoda Link 🥋

[Create docker container](https://www.katacoda.com/courses/docker/deploying-first-container)
[My katacoda](https://www.katacoda.com/atzsamuel/scenarios/deploying-first-container)

# Description

In this first scenario, you'll take the role of Jane, a developer who needs to deploy a new Key-Value Store for an application she's working with. After discussions, it's been decided to use Redis, a popular KV Store.

Jane is unfamiliar with how Redis is deployed but has heard Docker makes it straightforward to deploy services into development and production.

This scenario discusses how she will complete her task and deploy Redis as a Docker Container.

Jane's development environment has access to latest version of the Docker Engine via a machine called docker. Her local dev machine has the Docker Client installed and accessible via the command line.

# Solution

# Step 1 - Running a container

Find existing images at https://registry.hub.docker.com/

```sh
#search docker image
$docker search redis
$docker run -d redis:latest
```

# Step 2 - Finding Running Containers

```sh
#For view launched container is running in the background
$docker ps
#For view more details such as IP address
$docker inspect <friendly-name|container-id>
#For view logs  <friendly-name|container-id>
$docker logs 1be3d5a6e86e
```

# Step 3 - Accesing Redis

```sh
#Redis runs on 6379 port, we need instance to be listening on the port using -p <host-port>:<container-port> option
#Tip We can specify a particular IP ADDRESS when we define the port mapping, -p 127.0.0.1:6379:6379
$docker run -d --name redisHostPort -p 6379:6379 redis:latest
```

# Step 4 - Accesing Redis

```sh
#We would prefer to run multiple REDIS instance and configure the application depending on which port Redis is running on
$docker run -d --name redisDynamic -p 6379 redis:latest
#For view wich port has been assigned we use
$docker port redisDynamic 6379
$docker ps
```

# Step 5 - Persisting Data

```sh
# for this we need to use VOLUMES is done using the option  -v <host-dir>:<container-dir>
$docker run -d --name redisMapped -v /opt/docker/data/redis:/data redis
# Docker allows you to use $PWD as a plhaceholder for the current directory
$docker run -d --name redisMapped -v "$PWD/data":/data redis
```

# Step 6 - Running A Container in the Foreground

```sh
#If we wanted to interact with the container (for example, to acces a bash shell), include the options -it
$docker run ubuntu ps
$docker run -it ubuntu bash
```
