const {Sequelize, sequelize} = require('../db');
// const sequelize = require('db.js');

// TODO - define the Band model
let Band = sequelize.define(
    {
        name: DataTypes.STRING,
        genre: DataTypes.STRING,
    }
);


module.exports = {
    Band
};