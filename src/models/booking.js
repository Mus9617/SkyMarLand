// src/models/Booking.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Booking = sequelize.define('Booking', {
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  
 //-> a rajouter plus des options pur le bookig future a penser==??




});

module.exports = Booking;
