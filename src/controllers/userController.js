
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuid, parse } = require('uuid');
const { pool } = require("../../conectdb/dbconfig"); 
const { transporter } = require("../outils/mailer");
require("dotenv").config()




/** Here we have a function we named createUser in this function we use "bcrypt",to hash te passwords and we add a future with the id's in this
 * function we use "uuid" to augment the structure security. => "middlewares" not implemened yet!!!
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the user is created.
*/



const createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const {name, last_name} = req.body
        const email = req.body.email
        const country = req.body.country
        const phone = req.body.phone
        let data = []
        if (!email || !name || !last_name || !hashedPassword || !country || !phone || !country) {
            res.json({message: "The Require Field is Missing"})
        } else {
            data.push(`"${name}","${last_name}","${country}","${email}","${phone}","${hashedPassword}","${uuid()}"`);
            const sql = `INSERT INTO td_user ( name, last_name,country,email,phone,password,id) VALUES (${data})`
            const [rows] = await pool.execute(sql);
            res.json(rows);
        }
    } catch (err) {
        console.log(err.stack);
    }
};


/** In this function we made the login in this function we use "jwt","Bcrypt", to get the token with jwt, and with bcrypt we do a "compare" to see if the password we put is the same in our db.
 * 
 * @param {object} req 
 * @param {object} res 
 * @returns {Promise<void>} - A Promise that resolves when the login process is complete.
 */
/**
 * Handles the login functionality.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the login process is complete.
 */
const login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({error: 'Field all Spaces With * '
    
    })
        return
    }
    const email = req.body.email
    const sql = 'SELECT * FROM td_user WHERE email=?'
    const values = [email]
    const [rows] = await pool.execute(sql, values)
    if (rows.length === 0) {
        res.status(401).json({error: 'User Does Not Exist'})
        return
    }
    const isvalidPassword = bcrypt.compareSync(req.body.password, rows[0].password)
    if (!isvalidPassword) {
        res.status(401).json({error: 'The Password is incorrect'})
    } else {
        const token = jwt.sign(
            {
                email: rows[0].email,
                id: rows[0].id,
                name: rows[0].name,
                role: rows[0].role,
                lastname: rows[0].last_name,
            },
            process.env.SECRET_KEY,
            { expiresIn: '20d' }
        )
        console.log(token)
        res.status(200).json({ jwt: token,role: rows[0].role})
    }
}






const testEmail = async (req, res) => {
    const info = await transporter.sendMail({
      from: `${process.env.SMTP_EMAIL}`,
      to: 'speede078@gmail.com',
      subject: 'Hello ✔ give',
      text: 'Hello world?',
      html: '<b>Hello world?</b>',
    })
  
    console.log('Message sent: %s', info.messageId)
    res.status(200).json(`Message send with the id ${info.messageId}`)
  }





module.exports = { createUser, login, testEmail}