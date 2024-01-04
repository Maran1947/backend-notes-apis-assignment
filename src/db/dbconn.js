const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

mongoose.connect(mongoDB)
 .then(() => console.log("Mongodb connected successfully..."))
 .catch((err) => console.log(err));

module.exports = mongoose;