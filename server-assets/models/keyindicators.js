module.exports = function(sequelize, DataTypes) {
  DataTypes.DATEONLY = 'DATE';
  return sequelize.define('keyindicators', { 
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false, 
      validation: {
        isDate: true
      }
    },
    baptized: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    baptismal_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    sacrament_meeting: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    member_present_lessons: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    other_lessons: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    new_investigators: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    progressing_investigators: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    rc_la: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    },
    referrals_sent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        isNumeric: true
      }
    }
  });
};
