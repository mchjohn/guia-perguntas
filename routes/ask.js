module.exports = (app) => {
  app.get('/perguntar', (req, res) => {
    res.render('ask')
  })
}