const {Sequelize, sequelize} = require('../db');
// const sequelize = require('db.js');

// TODO - define the Song model
let Song = sequelize.define(
    {
        title: DataTypes.STRING,
        year: DataTypes.INTEGER,
        length: DataTypes.INTEGER,
    }
);

module.exports = {
    Song
};