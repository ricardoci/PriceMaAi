
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://rubybanuelos197:FdjQUFpExjCP5Fln@timestudy.jstfql5.mongodb.net/?retryWrites=true&w=majority');



const connection = mongoose.connection;
// defines the auth.js secret
const jwtSecret = 'potaToe';



module.exports = {
    jwtSecret,
    connection
  };
