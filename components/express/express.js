const express = require('express')

module.exports = () => {
  const start = async ({ inMemDatabase, model }) => {
    const app = express()
    const port = 5000
    app.use(express.json())
    const { convertToGameModel, gameSchema } = model
    
    app.get('/', (req, res) => {
      res.send('You can find a lot of gametypes here!')
    })
    
    app.get('/api/gametypes', (req, res) => {
      gameSchema.find({}, (err, games) => {
        res.send(games)
      })
    })
    
    app.get('/api/gametype/:name', (req, res) => {
      gameSchema.findOne({ name: req.params.name }, (err, game) => {
        res.send(err || !game ? 'no such game like this!' : game)
      })
    })
    
    app.post('/api/add-game', (req, res) => {
      const convertedData = convertToGameModel(req.body)
      if (convertedData.error) return res.status(convertedData.status).send(convertedData.error)
      convertedData.save()
      res.send('Your add was success!')
    })

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  }

  return { start }
}
