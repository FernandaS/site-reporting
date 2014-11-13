module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reports', { 
    //when building date new Date(Date.parse("Jul 8, 2014"))
    date: {
      type: DataTypes.DATE,
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
