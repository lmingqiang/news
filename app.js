//导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'news'
};
const sessionStore = new MySQLStore(options);

//实例化
const app = express();

//配置静态资源
app.use('/public', express.static('./public'));

//配置第三方资源
app.use('/node_modules', express.static('./node_modules'));

//配置body-parser包，使req带有请求体  req.body
app.use(bodyParser.urlencoded({ extended: false }));

//配置包   res.render();
app.engine('html', require('express-art-template'));

//配置express包
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

//session信息
app.use((req, res, next) => {
    app.locals.userid=req.session.user;
    next();
});

//使用路由
app.use(router);

//输入错误标识---404
app.use((req, res, next) => {
    res.render('404.html');
});

// 服务器错误信息
app.use((err,req,res,net) => {
    res.send({
        code: 500,
        msg: '服务器错误！'
    });
});


//监听端口
app.listen(9654, () => {
    console.log('--------------------------run------------------------');    
});