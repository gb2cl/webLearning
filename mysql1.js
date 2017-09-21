//1.导入MySQL模块
var mysql = require("mysql");
//console.log(mysql);
//2.创建时数据库连接
var connection = mysql.createConnection({
	host:'127.0.0.1',
	port:'3306',
	//host，port可以省略，默认为主机的地址和端口
	user:'root',
	password:'root',
	database:'web1702'
});
//console.log(connection);
//3.连接数据库
connection.connect();
//4.执行查询或更新
var sql = "select * from xk_student";
connection.query(sql,function(err,results,fields){
	if(err){
		throw err;
	} else {
		console.log(results);
		console.log(fields);
	}
});
//5.关闭数据库（等所有查询全部完成之后才关闭）
connection.end();