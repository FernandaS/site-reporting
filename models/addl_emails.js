module.exports = function(sequelize, DataTypes) {
  return sequelize.define('addl_emails', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      autoIncrement: true 
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  });
};
