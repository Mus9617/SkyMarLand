
const express = require('express');
const router = express.Router();



/**
 * Module dependencies.
 * @module bookingRoutes
 */
const { createBooking, getallbookings } = require('../controllers/bookingcontroller');


router.route('/createbooking/:id').post(createBooking);
router.route('/getallbookings').get(getallbookings);



module.exports = router;
