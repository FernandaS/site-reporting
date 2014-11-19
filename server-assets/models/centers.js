module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centers', { 
    center: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
      validation: {
        isAlpha: true
      }
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: true,
      validation: {
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
      validation: {
        isAlpha: true
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        isAlpha: true
      }
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        isAlpha: true
      }
    }
  });
};
