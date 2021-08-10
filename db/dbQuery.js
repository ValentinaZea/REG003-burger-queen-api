// const { query } = require('express');
const pool = require('../controller/pg');
const dbQuery = (queryText, params) => new Promise((resolve, reject) => {
  pool.query(queryText, params)
    .then((res) => {
      console.log(res)
      resolve(res);
    })
    .catch((err) => {
      console.log(err)
      reject(err);
    });
});
module.exports = dbQuery;
