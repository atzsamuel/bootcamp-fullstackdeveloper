## Create Oracle Database
docker run -d -p 1521:1521 \
-e ORACLE_PASSWORD=holamundo \
-e APP_USER = appuser \
-e APP_USER_PASSWORD=mispassword \
 gvenlz/oracle-xe


# docker inspect iddocker | grep IP
 ## Backend 