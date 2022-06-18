# Kubernetes Observability: Basics

## katacoda Link => learning.oreilly.com🥋

[Liveness and Readiness Healthchecks](https://learning.oreilly.com/scenarios/kubernetes-observability-basics/9781492078982/)--

# Description

This scenario explores the basic techniques for observing the state of Kubernetes using metrics.

In the following steps you will learn how to:

access metrics information produced by each cAdvisor in each Kubelet,
inspect resources using the Resource Metrics API,
viewing metrics reported by Metrics Server.

# Solution

# Step 1 - Your Kubernetes Cluster

For this scenario, we've just started a fresh Kubernetes cluster for you. Verify that it's Ready and Ok

```sh
${ clear && \
  echo -e "\n=== Kubernetes Status ===\n" && \
  kubectl get --raw '/healthz?verbose' && \
  kubectl version --short && \
  kubectl get nodes && \
  kubectl cluster-info;
} | grep -z 'Ready\| ok\|passed\|running'
```

The `Helm` package manager used for installing applications on Kubernetes is also available:

```sh
$helm version --short
```

# Kubernetes Dashboard

You can administer your cluster with the _kubectl_ command-line tool or use the [Kubernetes Dashboard](https://8f323b6579c74ea7a1d6925ef0708be0-2886903813-30000-kira01.environments.katacoda.com/)

# Step 2 - Sample Application

Before exploring observability topics, start a small application to provide something to observe.

Run 3 instances of the random-logger container to start generating continuously random loggin events:

```sh
$kubectl create deployment random-logger --image=chentex/random-logger
#Scale to 3 instances:
$kubectl scale deployment/random-logger --replicas=3
#The 3 pods will start shortly
$kubectl get pods
```

[Source code container logger](https://github.com/chentex/random-logger)

# Step 3 - Resource Inspection General Inspectioin of a Cluster

When you first start interacting with a running cluster there are a few commands to help you get oriented
with it's health and state.

```sh
#Inspect the cluster general state:
$kubectl cluster-info
# Inspect this Kubernetes cluster only worked node:
$kubectl describe node node01
# For deeper details, you can generate complete dump of the cluster state to a directory
$kubectl cluster-info dump --all-namespaces --output-directory=cluster-state --output=json
# This creates a directory where each files is a report on all the nodes and namespaces:
$tree cluster-state
```

There is a wealth of information you can mine.

```sh
# Show me all the containers images names in the namespace:
kube-system namespace: jq '.items[]?.status.containerStatuses[]?.image' cluster-state/kube-system/pods.json

#Show me when all the container images were started in the default namespace:
jq '.items[]?.status.containerStatuses[]? | [.image, .state[]?.startedAt]' cluster-state/default/pods.json
```

# General Inspection for a Deployment

The running state of an application can be observed through a variety of _kubectl describe_ commands across
various resources.

```sh
# Inspect the last deployment:
$kubectl describe deployments | grep "Replicas:"
# Inspect the 3 pods:
$kubectl get pods
$kubectl describe pods
```

# Events

```sh
# Kubernetes also maintains a history of events:
$kubectl get events
# Scaling is a type of event. Scale down the Pod from 3 down to 2:
$kubectl scale deployment/random-logger --replicas=2
# Notice the last event will reflect the scaling request:
$kubectl get events --sort-by=.metadata.creationTimestamp
# Note: These events are not to be confused with security audit logs wich are also recorded.
```

# Inspecting Containers

You can also typically get into a running container and inspect it as well. Get the name of the First Pod.

```sh
$POD=$(kubectl get pod -o jsonpath="{.items[0].metadata.name}")
# Inspect the script contents inside the container file system:
$kubectl exec $POD -- cat entrypoint.sh
# Or shell into the container, and come back with the *exit* command
$kubectl exec -it $POD --/bin/sh
```

There is a wealth of helpful Linux commands to give you information about the Linux containers. Here are just a few

```sh
$kubectl exec $POD --uptime
$kubectl exec $POD -- ps
$kubectl exec $POD -- stat -f
$kubectl exec $POD --container random-logger --lsof
$kubectl exec $POD --container random-logger --iostat
```

When the Pod has nomre than one container, the specific container name may be referenced:

```sh
$kubectl exec $POD --container random-logger -- ls -a -l
```

# Step 4 - cAdvisor

Every Node in Kubernetes cluster has a Kubelet process.
Within each Kubelet process is a cAdvisor. The cAdvisor continuously gathers metrics about the state of the
Kubernetes resources on each Node. This metrics information is vital to monitor to understand the state of the cluster.
This wealth of information is available through the Resource Metrics API. Let's inspect the metrics.

Each node exoses statistics continuously updated by cAdvisor. For your cluster, get a list of the node names:

```sh
$kubectl get nodes
```

For this small Kubernetes cluster in this scenario, the two node names can be listed:

```sh
$export NODE_0=$(kubectl get nodes -o=jsonpath="{.items[0].metadata.name}")
$export NODE_1=$(kubectl get nodes -o=jsonpath="{.items[1].metadata.name}")
$echo -e "The control-plane nod is $NODE_0 \n The worker node is $NODE_1
```

Open a proxy to the Kubernetes API port:

```sh
$kubectl proxy > /dev/null &
# Query the metrics for the work node:
$curl localhost:8001/api/v1/nodes/$NODE_1/proxy/metrics
# The Kubernetes API aggregates cluster-wide metrics at /metrics:
$curl localhost:8001/metrics/ | jq
```

# Step 5 - Metrics Server

The facto light monitoring application for Kubernetes is [metrics-server](https://github.com/kubernetes-incubator/metrics-server)
Metricks Server is a metrics aggregator. It discovers all nodes on the cluster and queries eacch node's kubelet
for CPU and memory usage. There is no long term metrics storage, is holds just the latest metrics. Typically,
the server may be installed with a Heml chart.

The [Bitnami metrocs-server chart]() is very helpful.
However, this scenario has already installed a metrics-server when it installed the Kubernetes Dashboard Helm chart
You'll sometime find that a metrics-server chart is a subchart of other charts, just as it is with the dashboard chart.

Metrics-server will add a new API endpoint named _metrics.k8s.io_ in a few moments you should be able to list
metrics using the following command:

```sh
$kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes | jq
# If the metrics are not ready, this message will appear:
Error from server (ServiceUnavailabe): the server currently unable tok handle the request
```

ONce the metris are ready, a JSON dump of the metrics will apppear. You can also inspect metrics such as the
CPU and memory of a Node:

```sh
$kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes/node01 | jq
# These metrics also appears in the *top* report:
$kubectl top node
# If the metrics are not ready you may get this message:
Error from server (ServiceUnavailable): the server is currently unable to handle the
request(get nodes.metrics.k8s.io)
# Or
error: metrics not available yet
# However, once the metrics are available the normal message should look similar to this:
NAME           CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
controlplane   138m         6%     991Mi           52%
node01         79m          3%     575Mi           14%
# Pod information can also be observed:
$kubectl top pods --all-namespaces
```

Metrics information is also reflected in the dashboard.
Launch the [Kubernetes dashboard](https://8f323b6579c74ea7a1d6925ef0708be0-2886903813-30000-kira01.environments.katacoda.com/)
and in pages for each resource the same Top informatino appears in the UI. The also utilizes these vital metrics
make decisions to scale up and down Pod instances.

In the past, there was no Resource Metrics API and a service called heapster, now deprecated, used to gather all
the cAdvisor metrics and bit more manually.
Around the 1.6 to 1.8 Kubernetes releases the Resource Metrics API was added. IN concert, Heapster was removed and
Metrics Server is now the facto service the aggregates metriccs from the Metrics API.

Metrics-server is a lighter version of Heapster. It gathers the latest metrics for reference and does not
store historial data. For accumulation of trending metrics, the de facto Prometheus time-series database can
ooptionally be added to a cluster

The [exposed Resource Metrics API is documented here](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/instrumentation/resource-metrics-api.md)

Another metric gathering server is [kube-state-metrics](https://github.com/kubernetes/kube-state-metrics#kube-state-metrics-vs-metrics-server)
It is used to provide metrics information for [Prometheus](https://prometheus.io/)
Once you need more metrics that are gathered over time, then typically Prometheus is added to the cluster
