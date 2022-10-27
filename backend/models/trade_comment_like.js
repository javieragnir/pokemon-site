const { Model } = require('sequelize');

const { sequelize } = require('../util/db');

class TradeCommentLike extends Model {}

TradeCommentLike.init({

}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'trade_comment_likes',
});

module.exports = TradeCommentLike;
