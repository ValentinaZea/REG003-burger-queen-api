/* eslint-disable no-unused-vars */
const { Pool } = require('pg');
const express = require('express');
const config = require('./config');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/error');
const routes = require('./routes');
const pkg = require('./package.json');
const app = express();
const { port, secret } = config.db;
app.set('config', config.db);
app.set('pkg', pkg);
// const authRoute = require('./routes/auth');
// const usersRoute = require('./routes/users');
// const productsRoute = require('./routes/products');
// const ordersRoute = require('./routes/orders');
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(authMiddleware(secret));

// Registrar rutas
// routes(app, (err) => {
//   if (err) {
//     throw err;
//   }

//   app.use(errorHandler);

//   app.listen(port, () => {
//     console.info(`App listening on port ${port}`);
//   });
// });

app.use(require('./routes/products'));

app.use(errorHandler);
app.listen(port, () => {
  console.info(`App listening on port ${port}`);
});
