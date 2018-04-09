const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin;

// GET /signin 登陆页

router.get('/',checkLogin, function(req,res,next){
  res.send('登陆页')
})

// POST /signin 用户登陆
router.post('/',checkLogin, function(req,res,next){
  res.send('登录')
})

module.exports = router
