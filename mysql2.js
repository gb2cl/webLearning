//1.加载MySQL模块
var mysql = require("mysql");
//2.创建连接池
var pool = mysql.createPool({
	database:"web1702",
	user:"root",
	password:"root"
});
//3.获取连接
pool.getConnection(function(err,connection){
	if(err){
		throw err;
	} else {
		var sql = "select * from xk_course";
		connection.query(sql,function(err,results){
			if(err){
				throw err;
			} else {
				console.log(results);
			}
		});
		//4.释放连接到连接池，供下次连接使用
		connection.release();
		//5.关闭连接池
		pool.end();
	}
});

console.log("end..............");