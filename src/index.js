const express = require('express');
const cors = require("cors")
/**
 * User routes module.
 * @type {Object}
 */
const userRoute = require('./routes/userRoutes');
/**
 * The routes for the model.
 *
 * @type {Object}
 */
const modelRoutes = require('./routes/modelRoutes');
const bookroute = require('./routes/bookingRoutes');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
console.log("a");

app.use("/User", userRoute)

console.log("b");


app.use("/model", modelRoutes)
app.use("/booking", bookroute)




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
