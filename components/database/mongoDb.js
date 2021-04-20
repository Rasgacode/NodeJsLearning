const mongoose = require('mongoose')

module.exports = () => {
  const start = async () => {
    mongoose.connect('mongodb://localhost:27017/gamesDB', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    },
    err => {
      if (!err) console.log('Connection succeeded')
      else console.log(`Error in connection ${err}`)
    })
  }

  return { start }
}