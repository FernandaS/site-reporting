module.exports = function(sequelize, DataTypes) {
  DataTypes.DATEONLY = 'DATE';
  return sequelize.define('reports', { 
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    visitor_total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    visitor_tour: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    visitor_tournonmember: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    referral_cards: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    referral_called: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    referral_inbound: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    referral_member: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
