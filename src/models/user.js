
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

/**
 * Represents a user in the system.
 *
 * @typedef {Object} User
 * @property {string} username - The username of the user.
 * @property {string} password - The password of the user.
 * @property {('user' | 'admin')} role - The role of the user. Can be either 'user' or 'admin'.
 */
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user',
  },
});

module.exports = User;
