module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reports', { 
    //when building date new Date(Date.parse("Jul 8, 2014"))
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    visitor_total: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    visitor_tour: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    visitor_tournonmember: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    referral_cards: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    referral_called: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    referral_inbound: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    referral_member: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
