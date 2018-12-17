//导包
const connection = require('../config/db_config.js');

//列表页展示数据
exports.showTopic = (cb) => {
    const sqlstr = 'select * from topics order by id desc';
    connection.query(sqlstr, (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
};



//编辑页新添加的数据
exports.newtopicCreateTopics = (data, cb) => {
    const sqlstr = 'insert into topics set ?';
    connection.query(sqlstr, data, (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
};



