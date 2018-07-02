const express = require('express');
const app = express();
const passport = require('passport');
var flash = require("connect-flash");
const session = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').load();
const path = require("path");
//Models
const db = require("./models");

const PORT = process.env.PORT || 5000;
//const PORT = process.env.PORT || 3001;

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'funny rain', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


//boilerplate web start page
//app.get('/', function (req, res) {

//    res.send('Welcome to Passport with Sequelize');

//});


//load passport strategies
//user strategy
require("./config/usr_passport.js")(passport, db.User);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    //use this in development
    res.sendFile(path.join(__dirname,"./client/public/index.html"));
    //change to this in production
    //res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Sync Database
db.sequelize.sync().then(function () {

    console.log('Nice! Database looks fine')

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});


app.listen(PORT, function (err) {

    if (!err)
        console.log("Site is live on port " + PORT);
    else console.log(err)

});