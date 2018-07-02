module.exports = function (sequelize, Sequelize) {

  const User = sequelize.define("user", {
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

  return User;

}
