const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
require('./src/db/dbconn.js');

const routes = require('./src/api/routes/routes.js');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());  
app.use(cookieParser());
app.use(cors());

app.get('/', (req,res) => {
    res.send("Welcome to Notes APIs!");
});

app.use('/api',routes);

app.get('*', (req,res) => {
    res.status(404).send({
        message: "Not found",
        path: req.path
    });
});

app.listen(port, () => console.log(`Server is running at ${port}`));

module.exports = app;