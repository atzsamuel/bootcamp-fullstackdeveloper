#BUILD
# docker build -t myapp:0..1.0 -f 0.dockerfile .
# docker run -p 8080:80 -d myapp:0..1.0
FROM nginx:1.22.0

COPY index.html /user/share/nginx/html/index.hml