var bcrypt = require('bcrypt-nodejs');

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
      },
      validate: {
        len: [8, 20],
        notEmpty: true,
        isAlphanumeric: true
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
  }, {
     instanceMethods: {
        verifyPassword: function(password, done) {
          return bcrypt.compare(password, this.password, function(err, res){
            return done(err, res);
          });
        }
     }
  });
};
