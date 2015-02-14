module.exports = function(index, connection) {

  index.get('/', function(req, res) {
    connection.query('SELECT * FROM admin', function(err, rows) {
		res.render('index', {admins: rows});
	});  
  });
};