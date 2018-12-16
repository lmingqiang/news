//导包
const express = require('express');
const user = require('./function/user.js');



const router = express.Router();

router.get('/', user.shouwSignin);


//导出
module.exports = router;