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

//文章详情页
exports.topicDetails = (topicId, cb) => {
    const sqlstr = 'select * from topics where id = ?';
    connection.query(sqlstr, topicId, (err, data) => {
        if (err) {
            return cb(err);
        }
        cb(null, data);
    });
};

//删除文章
exports.topicDetailDeletes = (topicId, cb) => {
    const sqlstr = 'delete from topics where id = ?';
    connection.query(sqlstr, topicId, (err, data) => {
        if (err) {
            return cb(err);
        }
        cb(null, data);
    });
};

//编辑文章
exports.topicEdit = (body, topicId, cb) => {
    const sqlstr = 'update topics set ? where id = ?';
    connection.query(sqlstr, [body, topicId], (err, data) => {
        if (err) {
            return cb(err);
        }
        cb(null, data);
    });
};  