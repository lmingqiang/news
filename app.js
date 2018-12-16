//导包
const express = require('express');
const router = require('./router');

//实例化
const app = express();

//使用路由
app.use(router);
//监听端口
app.listen(9654, () => {
    console.log('--------------------------run------------------------');    
});