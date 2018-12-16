//导包
const express = require('express');
const user = require('./function/user.js');



const router = express.Router();

router.get('/signin', user.showSignin);


//导出
module.exports = router;