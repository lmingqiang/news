//导包
const M_topic = require('../models/m_topic.js');
const moment = require('moment');

//index页面
exports.showIndex = (req, res) => {
   
    M_topic.showTopic((err, data) => {
        // console.log(data);        
        if (err) {
            return res.send('服务器错误！');
        }
        res.render('index.html', {
            items: data,
            user: req.session.user
        });
    });
};

//编辑页
exports.topicCreateTopic = (req, res) => {
    res.render('topic/create.html', {
        user: req.session.user
    });
};


//编辑页面数据
exports.newtopicCreateTopic = (req, res) => {
    const body = req.body;
    body.userId = req.session.user.id;
    body.createdAt = moment().format();
    // console.log(body);
    M_topic.newtopicCreateTopics(body, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                msg: '服务器错误！'
            });
        }
        res.send({
            code: 200,
            msg: '添加成功！',
        });
    });
    
};