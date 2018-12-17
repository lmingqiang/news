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


//使用路由
app.use(router);


//监听端口
app.listen(9654, () => {
    console.log('--------------------------run------------------------');    
});