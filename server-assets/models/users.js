var bcrypt = require('bcrypt');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', { 
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
      set:  function(pass) {
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(pass, salt);
            this.setDataValue('password', hash);
      }
    },
    role: {
      type: DataTypes.ENUM('ADMIN','DIRECTOR'),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
     instanceMethods: {
        verifyPassword: function(password, done) {
          return bcrypt.compareSync(password, this.password, function(err, res){
            console.log('hi');
            return done(err, res);
          });
        }
     }
  });
};
