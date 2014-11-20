var Database = require('../models/index');
var Models = Database.models;
var Sequelize = Database.sequelize;
var Promise = require('bluebird');
var services = {
	addReport: addReport,
	putReport: putReport,
	delReport: delReport,
	getOneByMonth: getOneByMonth,
	getAllByMonth: getAllByMonth,
	getAllByRange: getAllByRange
};

module.exports = services;

//logic
function addReport(rData){
	var report = Models.keyindicators.build({
		userId: rData.userId,
		centerId: rData.centerId,
		date: rData.date,
		baptized: rData.baptized,
    baptismal_date: rData.baptismal_date,
    sacrament_meeting: rData.sacrament_meeting,
    member_present_lessons: rData.member_present_lessons,
    other_lessons: rData.other_lessons,
    new_investigators: rData.new_investigators,
    progressing_investigators: rData.progressing_investigators,
    rc_la: rData.rc_la,
    referrals_sent: rData.referrals_sent
	});
	return report.save();
};

function putReport(rData){
	return Models.keyindicators.update(rData.updatedValues,
 	{
    	where: { id: rData.id }
 	});
};

function delReport(rData){
	return Models.keyindicators.destroy({ where: { id: rData.id } });
};

function getOneByMonth(rData){
	return Models.centers.find({
		where: {id: rData.id},
  		include: [{ 
  			model: Models.keyindicators, 
  			as: 'Reports', 
  			where: { 'Reports.date': rData.date },
  			attributes: [
  			'id', 'date', 'baptized', 'baptismal_date', 'sacrament_meeting', 
        'member_present_lessons', 'other_lessons', 'new_investigators',
        'progressing_investigators', 'rc_la', 'referrals_sent',
  			[Sequelize.fn('date_format', Sequelize.col('Reports.date'), '%Y-%m-%d'), 'date']
  			]
  	  	}]
	}, {raw: true});
};

function getAllByMonth(rData){
	return Models.centers.findAll({
  		include: [{ 
  			model: Models.keyindicators, 
  			as: 'Reports', 
  			where: { 'Reports.date': rData.date },
  			attributes: [
        'id', 'date', 'baptized', 'baptismal_date', 'sacrament_meeting', 
        'member_present_lessons', 'other_lessons', 'new_investigators',
        'progressing_investigators', 'rc_la', 'referrals_sent',
        [Sequelize.fn('date_format', Sequelize.col('Reports.date'), '%Y-%m-%d'), 'date']
        ]
  	  	}]
	}, {raw: true});
};

function getAllByRange(rData){
  	return new Promise(function(resolve, reject){
      Models.centers.findAll({
        include: [{ 
          model: Models.keyindicators, 
          as: 'Reports', 
          where: { 'Reports.date': { between: [rData.start, rData.end] } },
          attributes: [
            'id', 'date', 'baptized', 'baptismal_date', 'sacrament_meeting', 
            'member_present_lessons', 'other_lessons', 'new_investigators',
            'progressing_investigators', 'rc_la', 'referrals_sent',
            [Sequelize.fn('date_format', Sequelize.col('Reports.date'), '%Y-%m-%d'), 'date']
          ]
    }]}, {raw: true}).then(function(reports){
      var organizedReports = Sequelize.Utils._.chain(reports)
      .groupBy('center')
      .map(function(value, key){
        return {  center: key, 
                  reports:  Sequelize.Utils._.map(value, function(report){
                    return {
                      id: report['Reports.id'],
                      date: report['Reports.date'],
                      baptized: report['Reports.baptized'],
                      baptismal_date: report['Reports.baptismal_date'],
                      sacrament_meeting: report['Reports.sacrament_meeting'],
                      member_present_lessons: report['member_present_lessons'],
                      other_lessons: report['other_lessons'],
                      new_investigators: report['new_investigators'],
                      progressing_investigators: report['progressing_investigators'],
                      rc_la: report['rc_la'],
                      referrals_sent: report['referrals_sent']
                    }
                })
               }
      }).value();
      resolve(organizedReports);
    }, function(err){
      reject(err);
    });
  });
};
