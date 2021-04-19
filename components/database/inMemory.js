const gameTypes = {
    horizonZeroDawn: 'Open world RPG',
    kingdomOfAmalurReReckoning: 'Simple RPG',
    callOfDuty: 'FPS'
}

module.exports = () => {
  const start = async () => {
    return {
      getGames: () => gameTypes,
      getGame:(name) => gameTypes[name] || null,
      addGame:({ name, type }) => gameTypes[name] = type
    }
  }

  return { start }
}