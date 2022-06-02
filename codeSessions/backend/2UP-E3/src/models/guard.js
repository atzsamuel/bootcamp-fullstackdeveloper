const { pool } = require("../utils/oracle");
module.exports.verifyPersonToken = ({ person_token }) => {
  const bidings = { person_token };
  const SQL_SELECT_PERSON = `
  SELECT PERSON AS "person",
   EMAIL AS "email",
   FIRST_NAME AS "firts_name",
   LAST_NAME AS "last_name"
   FROM PERSON
   WHERE PERSON_TOKEN = :person_token`;
  return pool(SQL_SELECT_PERSON, bidings, { autoCommit: true });
};
