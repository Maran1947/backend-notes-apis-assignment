const express = require('express');
require('dotenv').config();
require('./src/db/dbconn.js');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());  

app.get('/', (req,res) => {
    res.send("Welcome to Notes APIs!");
});

app.get('*', (req,res) => {
    res.status(404).send({
        message: "Not found",
        path: req.path
    });
});

app.listen(port, () => console.log(`Server is running at ${port}`));

module.exports = app;