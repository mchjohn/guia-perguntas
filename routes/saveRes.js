const Response = require('../model/Response')

module.exports = (app) => {
  app.post('/salvar-resposta', (req, res) => {
    var body = req.body.body
    var askId = req.body.question

    Response.create({
      body,
      askId
    }).then(() => {
      res.redirect('/pergunta/'+askId)
    })
  })
}