//导包
const M_user = require('../models/m_user.js');
 
//登录页面
exports.showSignin = (req, res) => {
    res.render('signin.html');
};

//处理登录表单数据
exports.manageFormdata = (req, res) => {
    //获取请求体
    const body = req.body;
    // console.log(body);
    M_user.email(body.email, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                msg: '服务器错误！'
            });
        }
        //判断用户名是否存在
        if (data.length === 0) {
            return res.send({
                code: 202,
                msg: '用户名不存在！'
            });
        }
        //判断密码是否正确
        if (data[0].password !== body.password) {
            return res.send({
                code: 203,
                msg: '密码错误！'
            });
        }
        //将登录用户的信息保存到session
        req.session.user = data[0];
        // console.log(req.session.user);
        
        //返回正确结果
        res.send({
            code: 200,
            msg: '登录成功！'
        });
    });    
};