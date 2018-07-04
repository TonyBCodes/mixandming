// JavaScript source code
// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
require('dotenv').load();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_INFO, process.env.DB_ID, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const bcrypt = require("bcrypt-nodejs");

// Creating our User model
module.exports = (sequelize, Sequelize) => {
    const User = Sequelize.define("user", {
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_password: {
            type: Sequelize.STRING(16),
            allowNull: false
        },
        user_pw_update_code: {
            type: Sequelize.STRING(6),
            allowNull: true,
            defaultValue: null
        },
        user_pw_update_time: {
            type: Sequelize.DATE,
            defaultValue: null
        },
        usr_email: {
            type: Sequelize.STRING(30),
            allowNull: false,
            unique: true
        },
        usr_firstname: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        usr_lastname: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        usr_addr1: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        usr_addr2: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        usr_city: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        usr_state: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        usr_zip: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        usr_country: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        usr_phone: {
            type: Sequelize.STRING(15),
            allowNull: false
        },
        usr_dob: {
            type: Sequelize.DATE,
            allowNull: false
        },
        usr_tax_doc: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        usr_role: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
        },
        usr_last_login: {
            type: Sequelize.DATE,
            allowNull: true
        },
        usr_status: {
            type: Sequelize.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'inactive'
        }
    });
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = (password) => {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.hook("beforeCreate", (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
};