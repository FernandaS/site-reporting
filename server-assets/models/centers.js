module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centers', { 
    center: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.ENUM('YES','NO'),
      allowNull: false,
      defaultValue: 'yes'
    },
    type: {
      type: DataTypes.ENUM('CENTER','SITE'),
      allowNull: false,
      defaultValue: 'CENTER'
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};