var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', { 
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
        len: [1, 25]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set:  function(pass) {
            var hash = bcrypt.hashSync(pass, 10);
            this.setDataValue('password', hash);
      }
    },
    role: {
      type: DataTypes.ENUM('ADMIN','DIRECTOR'),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });
};
