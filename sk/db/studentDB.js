//当前代码必须在da.js之后执行
var pool = global.pool;
if(!pool){
	return ;
}

//查询所有学生
function findAll(handler){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		} else {
			var sql = "select * from xk_student";
			connection.query(sql,function(err,results){
				if(err){
					throw err;
				} else {
					handler.call(this,results);
				}
				//回收
				connection.release();
			});
		}
	});
}

//删除
function deleteById(id,handler){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		} else {
			var sql = "delete from xk_student where id = ?";
			connection.query(sql,[id],function(err,results){
				if(err){
					throw err;
				} else {
					handler.call(this,results);
				}
				connection.release();
			});
		}
	});
}

//通过id查找学生
function findById(id,handler){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		} else {
			var  sql = "select * from xk_student where id = ?";
			connection.query(sql,[id],function(err,result){
				if(err){
					throw err;
				} else {
					handler.call(this,result);
				}
				connection.release();
			});
		}

	});
}

//暴露接口
module.exports = {
	findAll:findAll,
	deleteById:deleteById,
	findById:findById
}
