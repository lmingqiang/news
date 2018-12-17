//导包
const express = require('express');
const user = require('./controllers/c_user.js');
const topic = require('./controllers/c_topic.js');


const router = express.Router();


router
    .get('/signin', user.showSignin)//渲染登录页面
    .post('/signin', user.manageFormdata)//登录表单提交数据
    .get('/', topic.showIndex)//列表页
    .get('/topic/create', topic.topicCreateTopic)//编辑页
    .post('/newtopicCreateTopic', topic.newtopicCreateTopic);





//导出
module.exports = router;