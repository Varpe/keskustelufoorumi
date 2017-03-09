/*
var Sequelize = require('sequelize');
var sequelize = new
Sequelize('postgres://cklfpkgwtnknxa:b97b6cf8580217dc8b7d7eecc7c7c80923d267a160d028229c9c7b019a29d551@ec2-54-163-224-108.compute-1.amazonaws.com:5432/deiho4so3aagqj', {
 dialect: 'postgres',
 protocol: 'postgres'
});
*/
var Sequelize = require('sequelize');
var sequelize = new Sequelize('foorumi', '', '', {
  dialect: 'sqlite',
  storage: '../db/database.sqlite'
});


module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
