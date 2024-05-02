
const { pool } = require("../../conectdb/dbconfig"); 
require("dotenv").config()
const jwt = require("jsonwebtoken");
const { extractToken } = require("../outils/jwt");
const { v4: uuid, parse } = require('uuid');

/**
 * Controller function for creating an article.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the article is created.
 */
/**
 * Controller function for creating an article.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the article is created.
 */
const ctrlCreateArticle = async (req, res) => {

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
                const { category_id, display_name, nm_limit, speed, seats, max_kg } = req.body;
                console.log(req.body);
                let data = [];

                if (!category_id || !display_name || !nm_limit || !speed || !seats || !max_kg) {
                    res.json({ message: "les champs ne sont pas remplis" });
                } else {
                    data.push(`"${uuid()}","${category_id}", "${display_name}", "${nm_limit}", "${speed}", "${seats}", "${max_kg}"`);
                    console.log(data);

                    const sql = `INSERT INTO td_model (id, category_id, display_name, nm_limit, speed, seats, max_kg)
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



const getallmodels = async (req, res) => {
    try {
        const sql = `SELECT * FROM td_model`;
        const [rows] = await pool.execute(sql);
        res.json(rows);
    } catch (err) {
        console.log(err.stack);
    }
}



const deleteModel = async (req, res) => {
    try {
        const token = await extractToken(req);
        jwt.verify(
            token,
            process.env.SECRET_KEY,
            async (err, authData) => {
                if (err) {
                    console.log(err);
                    res.status(401).json({ err: 'Unauthorized' });
                    return;
                } else {
                    try {
                        const { id } = req.params;
                        const sql = `DELETE FROM td_model WHERE id = "${id}"`;
                        await pool.execute(sql);
                        res.json({ message: "Model deleted successfully" });

                    } catch (err) {
                        console.log(err.stack);
                    }
                }
            });
    } catch (err) {
        console.log(err.stack);
    }
}

                    
           
        
        
            


const updateModel = async (req, res) => {
    try {
        const { id } = req.params;
        const { category_id, display_name, nm_limit, speed, seats, max_kg } = req.body;
        const values = [category_id, display_name, nm_limit, speed, seats, max_kg, id];
        const sql = `UPDATE td_model SET category_id = ?, display_name = ?, nm_limit = ?, speed = ?, seats = ?, max_kg = ? WHERE id = ?`;
        await pool.execute(sql, values);
        res.json({ message: "Model updated successfully" });
    } catch (err) {
        console.log(err.stack);
    }
}




const getallmodelsbyid = async (req, res) => {
    try {
        const id = req.params.id
        const sql = `SELECT * FROM td_model WHERE id = "${id}"`;
        const [rows] = await pool.execute(sql);
        res.json(rows);
    } catch (err) {
        console.log(err.stack);
    }
}




module.exports = { ctrlCreateArticle, getallmodelsbyid, deleteModel, updateModel, getallmodels }; // Add this line to export the 'ctrlCreateArticle' function

        
