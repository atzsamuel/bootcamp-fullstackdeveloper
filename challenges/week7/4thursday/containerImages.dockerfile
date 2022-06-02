# This is your Editor pane. Write the Dockerfile here and 
# use the command line to execute commands

FROM nginx:1.11-alpine
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80