//导包
const M_topic = require('../models/m_topic.js');
const moment = require('moment');

//index页面
exports.showIndex = (req, res, next) => {
   
    M_topic.showTopic((err, data) => {
        // console.log(data);        
        if (err) {
            return next(err);            
        }
        res.render('index.html', {
            items: data,
            user: req.session.user
        });
    });
};

//编辑页
exports.topicCreateTopic = (req, res, next) => {
    res.render('topic/create.html', {
        user: req.session.user
    });
};

//编辑页面数据
exports.newtopicCreateTopic = (req, res, next) => {
    const body = req.body;
    body.userId = req.session.user.id;
    body.createdAt = moment().format();
    // console.log(body);
    M_topic.newtopicCreateTopics(body, (err, data) => {
        if (err) {
            return next(err);
        }
        res.send({
            code: 200,
            msg: '添加成功！',
        });
    });
    
};

//文章详情页
exports.topicDetails = (req, res, next) => {
    // console.log(req.params);    
    const topicId = req.params.topicID;
    // console.log(topicId);    
    M_topic.topicDetails(topicId, (err,  data) => {
        if (err) {
            return next(err);
        }
        // console.log(data);        
        res.render('topic/show.html', {
            topic: data[0],
            userId: req.session.user ? req.session.user.id : 0
        });
    });
   
};

//删除文章
exports.topicDetailDelete = (req, res, next) => {
    const topicId = req.params.topicID;
    M_topic.topicDetailDeletes(topicId, (err, data) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
    
};

//渲染编辑文章页
exports.topicDetaiEdit = (req, res, next) => {
    const topicId = req.params.topicID;
    M_topic.topicDetails(topicId, (err, data) => {
        if (err) {
            return next(err);
        }
        res.render('topic/edit.html', {
            topic: data[0]
        });
    });    
};

//编辑页提交
exports.topicEdit = (req, res, next) => {
    const topicId = req.params.topicID;
    const body = req.body;
    M_topic.topicEdit(body, topicId, (err, data) => {
        if (err) {
            return next(err);
        }        
        res.send({
            code: 200,
            msg: '修改成功！'
        });
    });
};