const Sequelize = require('sequelize')
const connection = require('../database/dbconnection')

const Response = connection.define('responses', {
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  askId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Response.sync({force: false})

module.exports = Response