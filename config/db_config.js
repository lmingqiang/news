//导包
const mysql = require('mysql');

//配置数据库信息
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'news'
  });

  //链接数据库
connection.connect();
//导出connection
module.exports=connection;