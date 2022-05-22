# Oracle Commands

## Open PDB

```
  $ sqlplus / as sysdba
  $ alter pluggable database ORCLPDB open;
```

## Create user in PDB

```
  $ sqlplus
  $ < INGRESAR USUARIO Y CONTRASEÑA, USUARIO POR DEFECTO ES: system >
  $ ALTER SESSION SET CONTAINER = orclpdb;
  $ CREATE USER <username> IDENTIFIED BY <password> CONTAINER=CURRENT;
  $ GRANT ALL PRIVILEGES TO <username> CONTAINER=CURRENT;
  $ ALTER USER <username> DEFAULT TABLESPACE users TEMPORARY TABLESPACE temp QUOTA UNLIMITED ON users;
```

## Table Management

```sql
-- PERSON CREATION
CREATE TABLE PERSON (
	PERSON NUMBER,
	EMAIL VARCHAR2(100) NOT NULL,
	PASSWORD VARCHAR2(1000) NOT NULL,
	PERSON_TOKEN VARCHAR2(1000) NOT NULL,
	FIRST_NAME VARCHAR2(100) NOT NULL,
	LAST_NAME VARCHAR2(100) NOT NULL,
	ADD_DATE DATE DEFAULT SYSDATE,
	PRIMARY KEY(PERSON)
);
-- SEQUENCE
CREATE SEQUENCE SQ_PERSON NOCACHE;
-- PERSON GET VALUES
SELECT
	CASE
		WHEN EMAIL = ' '
		THEN 'default@gmail.com'
		ELSE EMAIL
	END
FROM PERSON WHERE PERSON = 4;
-- DELETE DATA
DELETE FROM PERSON;
-- ADD PERSON VALUE
INSERT INTO
PERSON(PERSON, EMAIL, PASSWORD, PERSON_TOKEN, FIRST_NAME, LAST_NAME)
VALUES
(SQ_PERSON.NEXTVAL, 'yosefmarr@gmail.com', 'admin', '4dm1n', 'Yosef', 'Maldonado');
INSERT INTO
PERSON(PERSON, EMAIL, PASSWORD, PERSON_TOKEN, FIRST_NAME, LAST_NAME)
VALUES
(SQ_PERSON.NEXTVAL, 'samuel@gmail.com', 'password', 'p4sw', 'Samuel', 'Atz');
INSERT INTO
PERSON(PERSON, EMAIL, PASSWORD, PERSON_TOKEN, FIRST_NAME, LAST_NAME)
VALUES
(SQ_PERSON.NEXTVAL, ' ', 'password', 'p4sw', 'Alex', 'sl');
```