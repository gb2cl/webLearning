var mysql = require("mysql");
var pool = mysql.createPool({
	host:"127.0.0.1",
	port:"3306",
	database:"web1702",
	user:"root",
	password:"root"
});
global.pool = pool;