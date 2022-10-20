const User = require('./user');
const Pokemon = require('./pokemon');
const TradeRequest = require('./trade_request');
const TradeComment = require('./trade_comment');

User.hasMany(TradeRequest);
TradeRequest.belongsTo(User);

TradeRequest.belongsTo(Pokemon, { as: 'offered' });
TradeRequest.belongsTo(Pokemon, { as: 'requested' });

User.hasMany(TradeComment);
TradeComment.belongsTo(User);
TradeRequest.hasMany(TradeComment);
TradeComment.belongsTo(TradeRequest);

module.exports = {
  User,
  Pokemon,
  TradeRequest,
  TradeComment,
};
