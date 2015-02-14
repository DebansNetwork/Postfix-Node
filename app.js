var express = require("express"),
	mysql = require("mysql"),
	path = require("path");

var app = express();

var db = require("./config/database.js"),
	appc = require("./config/app.js");

var connection = mysql.createConnection({
  host     : db.host,
  user     : db.user,
  password : db.password,
  database : db.database
});

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
 
  	console.log('connected as id ' + connection.threadId);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var postroute = {
	index: require("./routes/index")
};

var index = express.Router();

postroute.index(index, connection);

app.use('/', index);
app.use('/domain', domain);

app.listen(appc.port, function () {
    console.log("le serveur ecoute le port: ",appc.port);
});
