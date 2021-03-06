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
};

//验证nickname
exports.nickname = (nickname, cb) => {
    const sqlstr = 'select * from users where nickname = ?';
    connection.query(sqlstr, nickname, (err, data) => {
        if (err) {
            return cb(err);
        }
        cb(null, data);
    });
};

//添加用户
exports.adduser = (body, cb) => {
    const sqlstr = 'insert into users set ?';
    connection.query(sqlstr, body, (err, data) => {
        if (err) {
            return cb(err);
        }
        cb(null, data);
    });
};

