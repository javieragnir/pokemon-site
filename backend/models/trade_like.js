const { Model } = require('sequelize');

const { sequelize } = require('../util/db');

class TradeLike extends Model {}

TradeLike.init({

}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'trade_like',
});

module.exports = TradeLike;
