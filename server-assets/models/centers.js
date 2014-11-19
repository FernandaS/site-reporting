module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centers', { 
    center: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: true
      }
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: true
      }
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
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    }
  });
};
