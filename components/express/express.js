const Joi = require('joi')
const Express = require('express')
const app = new Express()

const port = 5000

module.exports = () => {
  const start = async ({ database }) => {
    app.use(Express.json())  
    
    app.get('/', (req, res) => {
      res.send('You can find a lot of gametypes here!')
    })
    
    app.get('/api/gametypes', (req, res) => {
      res.send(database.getGames())
    })
    
    app.get('/api/gametype/:name', (req, res) => {
      res.send(database.getGame(req.params.name) || 'no such game like this!')
    })
    
    app.post('/api/add-game', (req, res) => {
      const { value, error } = Joi.object({ name: Joi.string().min(3).required(), type: Joi.string().min(3).required() }).validate(req.body)
      
      if (error) return res.status(400).send(error.details[0].message)
    
      database.addGame({name: value.name, type: value.type})
      res.send('Your add was success!')
    })

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  }

  return { start }
}
