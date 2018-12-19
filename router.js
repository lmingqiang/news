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
    .post('/newtopicCreateTopic', topic.newtopicCreateTopic)//新文章提交
    .get('/signout', user.signout)//用户退出
    .get('/show/topec/:topicID', topic.topicDetails)//文章详情页
    .get('/topic/detail/delete/:topicID', topic.topicDetailDelete)//删除文章
    .get('/topic/detail/edit/:topicID', topic.topicDetaiEdit)//编辑文章页
    .post('/topic/edit/:topicID', topic.topicEdit)//编辑页完成提交
    .get('/signup', user.signup)//用户注册页
    .post('/signup', user.addSignup);//新用户注册



//导出
module.exports = router;