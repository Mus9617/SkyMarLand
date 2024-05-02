/**
 * Import the necessary controllers for model routes.
 * @namespace modelRoutes
 * @memberof routes
 */
const { ctrlCreateArticle, getallmodelsbyid, deleteModel, updateModel, getallmodels } = require("../controllers/controllermodel");
const express = require('express');
const router = express.Router();


router.route("/createarticle").post(ctrlCreateArticle);
router.route("/getallmodels").get(getallmodels);
router.route("/deletemodel/:id").delete(deleteModel);
router.route("/updatemodel/:id").patch(updateModel);
router.route("/getallmodelsbyid/:id").get(getallmodelsbyid);


module.exports = router;