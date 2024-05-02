  const validator = require('validator');
/**
 * Middleware to validate the email address in the request body.
 * If the email is not valid, it returns a 400 status code with a JSON response.
 * Otherwise, it sets the email in the request object and calls the next middleware.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
  const middlEmail = (req, res, next) => {
    const email = req.body.email;
    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "Wrong Format" });
    }
    req.email = email;
    next();
  }