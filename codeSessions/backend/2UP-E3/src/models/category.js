const db = require("../utils/db");

module.exports.create = ({ description }) => {
  return new Promise((resolve, reject) => {
    try {
      db.push({ category: db[db.length - 1].category + 1, description });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports.findById = ({ category }) => {
  return new Promise((resolve, reject) => {
    resolve(db.filter((c) => c.category === category));
  });
};

module.exports.fetchAll = () => {
  return new Promise((resolve, reject) => {
    resolve(db);
  });
};
