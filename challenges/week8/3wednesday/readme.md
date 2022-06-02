# Deploy Containers Using Kubectl

## katacoda Link 🥋

[Deploy Containers Using Kubectl](https://www.katacoda.com/courses/kubernetes/kubectl-run-containers)--

# Description

In this scenario, we'll learn how to use Kubectl to create and launch Deployments, Replication Controllers and expose them via Services without writing yaml definitions. This allows you to quickly launch containers onto the cluster.

# Solution

# Step 1 - Launch Cluster

To start we need to launch a Kubernetes cluster.
Execute the command below to start the cluster components and download the Kubectl CLI.

```sh
$minikube start --wait=false
#For wait the Node become Ready by checking
$kubectl get nodes
```

# Step 2 - Kubectl Run

This deployment is issued to the Kubernetes master which launches the Pods and containers required.
<Kubectl run_ is> similar to <docker run> but at a cluster level.
The format of the command is kubectl run <name of deployment> <properties>
The following command will launch a deployment called http which will start a container based
on the Docker Image katacoda/docker-http-server:latest.

```sh
$kubectl run http --image=katacoda/docker-http-server:latest --replicas=1
# For view the status of the deployments we can use
$kubectl get deployments
#To find out what Kubernetes created you can describe the deployment process
$kubectl describe deployment http
```

# Step 3 - Kubectl Expose

Expose the newly deployed http deployment via kubectl expose.
The command allows you to define the different parameters of the service and how to expose the deployment.
Use the following command to expose the container port 80 on the host 8000 binding to the external-ip of the host

```sh
$kubectl expose deployment http --external-ip="10.0.0.6" --port=8000 --target-port=80
# You will then be able to poing the host and see the result from HTTP service.
$curl http://10.0.0.6:8000
```

# Step 4 - Kubectl Run and Expose

With kubectl run it's possible to create the deployment and expose it as a single command.
Use the command command to create a second http service exposed on port 8001.

```sh
$kubectl run httpexposed --image=katacoda/docker-http-server:latest --replicas=1 --port=80 --hostport=8001
#For view it's be able to acces it using
$curl http://10.0.0.6:8001
# To find the details you can use
$docker ps | grep httpexposed
```

# Step 5 - Scale Containers

With our deployment running we can now use kubectl to scale the number of replicas.

Scaling the deployment will request Kubernetes to launch additional Pods.
These Pods will then automatically be load balanced using the exposed Service.

The command kubectl scale allows us to adjust the number of Pods running for a particular deployment or replication controller.

```sh
$kubectl scale --replicas=3 deployment http
#Listing all the pods, you should see three running for the <http deployment>
$kubectl get pods
#By describing the service you can view the endpoint and the associated Pods wich are included
$kubectl describe svc http
# Making requests to the service will request in different nodes processing the request
$curl http://10.0.0.6:8000
```
