module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', { 
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('ADMIN','DIRECTOR'),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  });
};
