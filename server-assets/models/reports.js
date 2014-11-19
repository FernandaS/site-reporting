module.exports = function(sequelize, DataTypes) {
  DataTypes.DATEONLY = 'DATE';
  return sequelize.define('reports', { 
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validation: {
        isDate: true
      }
    },
    visitor_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    visitor_tour: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    visitor_tournonmember: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    referral_cards: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    referral_called: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    referral_inbound: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    referral_member: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });
};
