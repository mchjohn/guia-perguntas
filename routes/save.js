const Ask = require('../model/Ask')

module.exports = (app) => {
  app.post('/salvar', (req, res) => {
    var title = req.body.title
    var desc = req.body.desc
    
    Ask.create({
      title,
      desc
    }).then(() => {
      res.redirect('/')
    })
  })
}