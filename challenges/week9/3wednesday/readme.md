# Livenes and Readiness Healthchecks

## katacoda Link => learning.oreilly.com🥋

[Liveness and Readiness Healthchecks](https://learning.oreilly.com/scenarios/liveness-and-readiness/9781492062073/)--

# Description

In this scenario, you'll learn how Kubernetes checks containers health using Readiness and Liveness Probes.

Readiness Probes checks if an application is ready to start processing traffic. This probe solves the problem of the container having started, but the process still warming up and configuring itself meaning it's not ready to receive traffic.

Liveness Probes ensure that the application is healthy and capable of processing requests.

# Solution

# Step 1 - Launch Cluster

To start, we need to launch a Kubernetes cluster.
Execute the command below to start the cluster components and download the Kubectl CLI.

```sh
$launch.sh
#After the cluster has started, deploy the demo application with
$kubectl apply -f deploy.yaml
```

# Step 2 - Readiness Probe

When deploying the cluster, two pods were also deployed to demonstrate health checking. You can view the deployment with

```sh
$cat deploy.yaml
```

When deploying the Replication Controller, each Pod has Readiness and Liveness check, Each check has the following format
for performing a healtcheck over HTTP.

```yaml
livenessProbe:
  httpGet:
    path: /
    port: 80
  initialDelaySeconds: 1
  timeoutSeconds: 1
```

The settings can be changed to call different endpoints, for example, /ping, based on your application

GET STATUS
The first Pod, bad-frontend is an HTTP service wich always returns a 500 error indicating it hasn't started correctly.
You can view the status of the Pod with

```sh
$kubectl get pods --selector="name=bad-frontend"
```

Kubectl will return the pods deployed with our particular label, Because the healthcheck is failing, it will say that zero
containers are ready. It will also indicate the number of restart attemps of the container.

To find out more details of why it's failing, describe the Pod.

```sh
$pod=$(kubectl get pods --selector="name=bad-frontend" --output=jsonpath={.items..metadata.name})
$kubectl describe $pod
```

READINESS OK
Our second Pod, frontend returns an OK status on launch

```sh
$kubectl get pods --selector="name=frontend"
```

# Step 3 - Liveness Probe

With our second Pod currently running in a health state, we can simulate a failure occurring

At present, no crashes should have ocurred

```sh
$kubectl get pods --selector="name=frontend"
```

# Crash Service

The HTTP server has an additional endpoint that will cause it to return 500 errors.
Using kubectl exec it's possible to call the endpoint.

```sh
$pod=$(kubectl get pods --selector="name=frontend" --output=jsonpath={.items..metadata.name})
$kubectl exec $pod -- /usr/bin/curl -s localhost/unhealthy
```

# Liveness

Based on the configuration, Kubernetes will execute the Liveness Probe. If the Probe fails, Kubernetes will destroy and
re-create the failded container. Execute the above command to crash the service and watch Kubernetes recover it automatically

```sh
kubectl get pods ---selector="name=frontend"
#The sheck may take a few moments to detect
```
