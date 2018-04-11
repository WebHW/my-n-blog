const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin;

// POST /signin 用户登出
router.get('/',checkNotLogin, function(req,res,next){
  res.send('登出')
})

module.exports = router
