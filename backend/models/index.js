const User = require('./user')
const Pokemon = require('./pokemon')
const TradeRequest = require('./trade_request')

User.hasMany(TradeRequest)
TradeRequest.belongsTo(User)

module.exports = {
  User,
  Pokemon
}