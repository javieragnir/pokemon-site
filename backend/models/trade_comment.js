const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../util/db');

class TradeComment extends Model {}

TradeComment.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  sequelize,
  underscored: true,
  modelName: 'trade_comments',
});

module.exports = TradeComment;
