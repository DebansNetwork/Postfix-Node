module.exports = function(domain, connection) {

	domain.get('/', function  (req, res) {
		connection.query('SELECT * FROM domain WHERE transport = \"virtual\"', function(err, rows) {
			res.render('domain/index', {domains: rows});
		});
	});

  	domain.get('/add', function (req, res) {
		res.render('domain/add', {type: false});
  	});

  	domain.post('/add', function (req, res) {

  		var req.body.domaintransport = "virtual";
  		
  		var dataadding  = {
  			domain: req.body.domainname,
  			description: req.body.domaindescription,
  			aliases: req.body.domainaliases,
  			mailboxes: req.body.domainmailboxes,
  			maxquota: req.body.domainmaxquota,
  			quota: req.body.domainquota,
  			transport: req.body.domaintransport,
  			backupmx: req.body.domainbackupmx,
  			created: req.body.domaincreated,
  			modified: req.body.domainmodified,
  			active: req.body.domainactive
  		};
  		
  		console.log(dataadding)
  		res.render('domain/add', {type: "Info", text: dataadding});

	});
};