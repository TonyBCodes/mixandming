// JavaScript source code
const bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, user) {

    const User = user;
    const LocalStrategy = require('passport-local').Strategy;

    // serialize
    passport.serializeUser(function (user, done) {
        done(null, user.user_id);
    });

    // deserialize user 
    passport.deserializeUser(function (user_id, done) {
        User.findById(user_id).then(function (user) {
            if (user) {
                done(null, user.get());
            }
            else {
                done(user.errors, null);
            }
        });
    });

}