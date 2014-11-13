module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centers', { 
    center: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.ENUM('YES','NO'),
      defaultValue: 'yes',
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('CENTER','SITE'),
      defaultValue: 'CENTER',
      allowNull: true
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
