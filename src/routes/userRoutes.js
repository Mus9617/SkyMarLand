/**
 * This module handles the user routes.
 * @module userRoutes
 */

console.log("c");
const express = require('express');
const { createUser, login, testEmail } = require('../controllers/userController');
const router = express.Router();

/**
 * Registers a new user.
 * @name POST /register
 * @function
 * @memberof module:userRoutes
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object with the registered user details.
 */
router.route("/register").post(createUser);

/**
 * Logs in a user.
 * @name POST /login
 * @function
 * @memberof module:userRoutes
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object with the logged in user details.
 */
router.route("/login").post(login);

router.post('/email', testEmail);

  




module.exports = router;
