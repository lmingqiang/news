// 导包
const connection = require('../config/db_config.js');//数据库配置包

//验证邮箱
exports.email = (email, cb) => {
    //sql语句
    const sqlstr = 'select * from users where email=?';
    connection.query(sqlstr, email, (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
        
    });
}


