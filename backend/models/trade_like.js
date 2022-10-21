const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../util/db');

class TradeLike extends Model {}

TradeLike.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'trade_like',
});

module.exports = TradeLike;
