module.exports = function(sequelize, DataTypes) {
  DataTypes.DATEONLY = 'DATE';
  return sequelize.define('keyindicators', { 
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    baptized: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    baptismal_date: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sacrament_meeting: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    member_present_lessons: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    other_lessons: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    new_investigators: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    progressing_investigators: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rc_la: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    referrals_sent: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
