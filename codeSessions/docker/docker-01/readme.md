## Docker commands
```sh
# for build docker image
$docker build -t myapp:0.1.0 -f 0.dockerfile .
# Run 
$docker run -p 8080:80 -d myapp:0.1.0
```