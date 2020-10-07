const Sequelize = require('sequelize')
const connection = require('../database/dbconnection')

const Ask = connection.define('questions', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

Ask.sync({force: false})

module.exports = Ask