#https://hub.docker.com/_/oraclelinux
# Add this docker file in the same folder: backend
# build
# 1. docker build -t backend:0.1.0 -f backend.dockerfile .
# Run
# 2. docker run -p 8500:8500 -d -e ORACLE_USER=appuser -e ORACLE_PASS=mispassword -e ORACLE_CONNSTR=ip/xepdb1 backend:0.1.0

FROM oraclelinux:8.6

# Install Oracle Client
RUN dnf install oracle-instantclient-release-el8 -y
RUN dnf install oracle-instantclient-basic -y

# Install NodeJS  
RUN dnf module install nodejs:16 -y

ENV SERVER_PORT=8500 \
ORACLE_USER=user \
ORACLE_PASS=pass \
ORACLE_CONNSTR=localhost:1521/orclpdb

# Copy application files from the host into the container
COPY . /opt/app

# for the app to run
WORKDIR /opt/app

RUN npm install

CMD ["npm", "start"]