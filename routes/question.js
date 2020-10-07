const Ask = require('../model/Ask')
const Response = require('../model/Response')

module.exports = (app) => {
  app.get('/pergunta/:id', (req, res) => {
    var id = req.params.id

    Ask.findOne({
      where: {id}
    }).then(question => {
      
      if(question != undefined) {
        Response.findAll({
          where: {askId: question.id},
          order: [['id', 'DESC']]
        }).then(responses => {
          res.render('question', {question, responses})
        })

      } else {
        res.redirect('/')
      }
    })
  })
}