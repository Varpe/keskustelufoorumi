var Sequelize = require('sequelize');
var sequelize = new
Sequelize('postgres://vzeimjppyoksfh:eda9114fddcf4bf91c190db5a04f6ef6d217d8306774cd89f1fb68b0dca2e2d6@ec2-54-243-252-91.compute-1.amazonaws.com:5432/d80nll27qcq5jo', {
 dialect: 'postgres',
 protocol: 'postgres'
});

/*
var Sequelize = require('sequelize');
var sequelize = new Sequelize('foorumi', '', '', {
  dialect: 'sqlite',
  storage: '../db/database.sqlite'
});
*/

module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
