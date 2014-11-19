module.exports = function(sequelize, DataTypes) {
  return sequelize.define('addl_emails', { 
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
      	isEmail: true
      }
    }
  });
};
