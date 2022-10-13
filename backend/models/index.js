const User = require('./user')
const Pokemon = require('./pokemon')
const TradeRequest = require('./trade_request')

User.hasMany(TradeRequest)
TradeRequest.belongsTo(User)

User.belongsToMany(Pokemon, { through: TradeRequest })
Pokemon.belongsToMany(User, { through: TradeRequest })

module.exports = {
  User,
  Pokemon,
  TradeRequest
}