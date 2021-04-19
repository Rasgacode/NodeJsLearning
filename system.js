const Systemic = require('systemic')
const Express = require('./components/express/express')
const Database = require('./components/database/inMemory')

module.exports = () => Systemic()
  .add('database', Database())
  .add('express', Express())
  .dependsOn('database')