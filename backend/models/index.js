const User = require('./user');
const Pokemon = require('./pokemon');
const TradeRequest = require('./trade_request');
const TradeComment = require('./trade_comment');
const TradeLike = require('./trade_like');
const TradeCommentLike = require('./trade_comment_like');

User.hasMany(TradeRequest);
TradeRequest.belongsTo(User);

TradeRequest.belongsTo(Pokemon, { as: 'offered' });
TradeRequest.belongsTo(Pokemon, { as: 'requested' });

User.hasMany(TradeComment);
TradeComment.belongsTo(User);
TradeRequest.hasMany(TradeComment);
TradeComment.belongsTo(TradeRequest);

User.belongsToMany(TradeRequest, { through: TradeLike, as: 'liked_posts' });
TradeRequest.belongsToMany(User, { through: TradeLike, as: 'users_liked' });

User.belongsToMany(TradeComment, { through: TradeCommentLike, as: 'liked_comments' });
TradeComment.belongsToMany(TradeComment, { through: TradeCommentLike, as: 'users_liked' });

module.exports = {
  User,
  Pokemon,
  TradeRequest,
  TradeComment,
  TradeLike,
};
