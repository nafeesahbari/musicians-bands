const {Sequelize, sequelize} = require('../db');
// const sequelize = require('db.js');

// TODO - define the Musician model
let Musician = sequelize.define( 
    {
        name: DataTypes.STRING,
        instrument: DataTypes.STRING,
    }
);

module.exports = {
    Musician
};