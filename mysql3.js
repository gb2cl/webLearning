var mysql = require("mysql");

var pool = mysl.createPool({
	user:"root",
	password:"root",
	database:"web1702"
});
var conn;
pool.getConnection(function(err,connection){
	if(err){
		throw err;
	} else {
		var sql = "select * from xk_clazz";
		connection.query(sql,function(err,results){
			if(err){
				throw err;
			} else {
				console.log(results);
			}
			pool.end();
		});
	}
});
console.log("外面的函数");