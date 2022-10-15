const User = require('./user')
const Pokemon = require('./pokemon')
const TradeRequest = require('./trade_request')

User.hasMany(TradeRequest)
TradeRequest.belongsTo(User)

TradeRequest.belongsTo(Pokemon, { as: 'offered' })
TradeRequest.belongsTo(Pokemon, { as: 'requested' })

module.exports = {
  User,
  Pokemon,
  TradeRequest
}