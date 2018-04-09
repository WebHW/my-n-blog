module.exports = function (app) {
  app.get('/', function (req,res){
    res.redirect('/posts')
  })
  app.use('/posts', require('./posts'))
  app.use('/singup', require('./singup'))
  app.use('/singin', require('./singin'))
  app.use('/singout', require('./singout'))
  console.log(1)
  app.use('/comments', require('./comments'))
}
