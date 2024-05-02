const { pool } = require("../../conectdb/dbconfig"); 
require("dotenv").config()
const jwt = require("jsonwebtoken");
const { extractToken } = require("../outils/jwt");
const { v4: uuid, parse } = require('uuid');

/**
 * Creates a booking for a vehicle.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the booking is created.
 */
   const createBooking = async (req, res) => {

  

        const article_id = req.params.id;

        const token = await extractToken(req)
        jwt.verify( 
            token,
            process.env.SECRET_KEY,
            async (err, authData) => {
                if (err) {
                    console.log(err);
                    res.status(401).json({ err: 'Unauthorized' });
                    return;
                }
                try {
                    const { datestart, dateend} = req.body;
                    console.log(req.body);
                    let data = [];
    
                    if (!datestart || !dateend) {
                        res.json({ message: "les champs ne sont pas remplis" });
                    } else {
                        data.push(`"${uuid()}","${authData.id}","${article_id}","${datestart}","${dateend}"`);
                        console.log(data);
    
                        const sql = `INSERT INTO td_rent(id,user_id,vehicle_id,datestart,dateend)
                                                VALUES (${data})`;
    
                        await pool.execute(sql);
                        res.json({ message: "tout est bon" });
                    }
                } catch (err) {
                    console.log(err.stack);
                    res.json({ message: "ce nest pas bon" });
                }
            }); // Add closing parenthesis here
    };


      const getallbookings = async (req, res) => {
        try {
            /**
             * SQL query to select data from multiple tables.
             * @type {string}
             */
            const sql = `SELECT *, td_rent.id AS book_id FROM td_rent JOIN td_model ON td_rent.vehicle_id = td_model.id JOIN td_user ON td_rent.user_id = td_user.id`;
            const [rows] = await pool.execute(sql);
            res.json(rows);
        } catch (err) {
            console.log(err.stack);
        }

 }

    module.exports =  {createBooking, getallbookings}