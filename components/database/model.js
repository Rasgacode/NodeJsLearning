const mongoose = require('mongoose')
const Joi = require('joi')

const gameSchema = mongoose.model('gameModel', new mongoose.Schema({ name: String, type: String }))

const convertToGameModel = (data) => {
  const { value, error } = Joi.object({ name: Joi.string().min(3).required(), type: Joi.string().min(3).required() }).validate(data)
  if (error) return { status: 400, error: error.details[0].message }
  return gameSchema(value)
}

module.exports = () => {
  const start = async () => {
    return { convertToGameModel, gameSchema }
  }

  return { start }
}
  
  