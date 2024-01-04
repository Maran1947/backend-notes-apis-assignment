const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit')
require('dotenv').config();
require('./src/db/dbconn.js');

const routes = require('./src/api/routes/routes.js');

const app = express();
const port = process.env.PORT || 8000;

const apiRequestLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
    handler: (req,res) => {
        return res.status(429).json({
            message: "Too many requests, please try again later."
        });
    }
});

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(apiRequestLimiter);

app.get('/', (req, res) => {
    res.send("Welcome to Notes APIs!");
});

app.use('/api', routes);

app.get('*', (req, res) => {
    res.status(404).send({
        message: "Not found",
        path: req.path
    });
});

app.listen(port, () => console.log(`Server is running at ${port}`));

module.exports = app;