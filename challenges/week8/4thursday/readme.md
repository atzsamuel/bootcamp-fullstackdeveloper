# Deploy Containers Using YAML

## katacoda Link 🥋

[Deploy Containers Using YAML](https://www.katacoda.com/courses/kubernetes/creating-kubernetes-yaml-definitions)--

# Description

In this scenario, you'll learn how to use Kubectl to create and launch Deployments, Replication Controllers and expose them via Services by writing yaml definitions.

YAML definitions define the Kubernetes Objects that become scheduled for deployment. The objects can be updated and redeployed to the cluster to change the configuration.

# Solution

# Step 1 - Create Deployment

One of the most common Kubernetes object is the deployment object. The deployment object defines the container spec required, along with the name and labels used by other parts of Kubernetes to discover and connect to the application.

Copy the following definition to the editor. The definition defines how to launch an application called webapp1 using the Docker Image katacoda/docker-http-server that runs on Port 80.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp1
spec:
  replicas: 1
  selector:
    matchLabels:
      app: webapp1
  template:
    metadata:
      labels:
        app: webapp1
    spec:
      containers:
        - name: webapp1
          image: katacoda/docker-http-server:latest
          ports:
            - containerPort: 80
```

```sh
#This is deployed to the cluster with the command
$kubectl create -f deployment.yaml
#As it's deployment object, a list of all the deployed objects can be obtained via:
$kubectl get deployment
#Details of individual deployments can be outputted with
$kubectl describe deployment webapp1
```

# Step 2 - Create Service

Copy the Service definition to the editor. The Service selects all applications with the label webapp1. As multiple replicas, or instances, are deployed, they will be automatically load balanced based on this common label. The Service makes the application available via a NodePort.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: webapp1-svc
  labels:
    app: webapp1
spec:
  type: NodePort
  ports:
    - port: 80
      nodePort: 30080
  selector:
    app: webapp1
```

```sh
#Deploy the Service with
$kubectl create -f service.yaml
#As before, details of all the Service objects deployed with
$kubectl get svc
# By describing the object it's possible to discover more details about the configuration
$kubectl describe svc webapp1-svc
#For ping
$curl host01:30080
```

# Step 3 - Scale Deployment

Details of the YAML can be changed as different configurations are required for deployment. This follows an infrastructure as code mindset. The manifests should be kept under source control and used to ensure that the configuration in production matches the configuration in source control.

Updates to existing definitions are applied using kubectl apply. To scale the number of replicas, deploy the updated YAML file using

```sh
$kubectl apply -f deployment.yaml
#Instantly, the desired state of our cluster has been updated, viewable with
$kubectl get deployment
#Additional Pods will be scheduled to match the request
$kubectl get pods
#Issuing requests to the port will result in different containers processing the request
$curl host01:30080
```
