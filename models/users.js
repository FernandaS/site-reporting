module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('ADMIN','DIRECTOR'),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  });
};
