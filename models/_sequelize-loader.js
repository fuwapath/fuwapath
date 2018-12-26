'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost/fuwapath', {logging: true, operatorsAliases: false, timezone: 'UTC'});

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};
