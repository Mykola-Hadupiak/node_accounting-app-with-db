'use strict';

const express = require('express');
const { router: userRouter } = require('./routes/user.route.js');
const { router: expensesRouter } = require('./routes/expenses.route.js');

function createServer() {
  const app = express();

  app.use('/users', express.json(), userRouter);
  app.use('/expenses', express.json(), expensesRouter);

  return app;
}

module.exports = {
  createServer,
};