const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass()

mongolass.connect(config)

exports.User = mongolass.model('User', {
  name: {type: 'string', require: true},
  password: { type: 'string', require: true},
  avatar: { type: 'string', require: true},
  gender: { type: 'string', enum:['m','f','x', default:'x']},
  bio: { type:'string', require:true}
})

// 根据用户名找到用户，用户名全局唯一
exports.User.index({name: 1},{ unique: true}).exec()
