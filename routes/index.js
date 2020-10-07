const Ask = require('../model/Ask')

module.exports = (app) => {
  app.get('/', (req, res) => {
    Ask.findAll({raw: true, order: [
      ['id', 'DESC']
    ]}).then(ask => {
      res.render('index', {ask})
    })
  })
}