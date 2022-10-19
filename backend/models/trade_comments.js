const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class TradeComments extends Model {}

TradeComments.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  sequelize,
  underscored: true,
  modelName: 'trade_comments'
})

module.exports = TradeComments