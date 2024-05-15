const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes')
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//connect to database
connectDB();

//middleware
app.use(bodyParser.json());
app.use(cors());


//routes
app.use('/', itemRoutes);

//error handler
app.use(errorHandler);

app.get('/home', (req, res) => {
  res.send('API is running');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
