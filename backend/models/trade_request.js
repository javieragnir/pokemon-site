const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class TradeRequest extends Model {}

TradeRequest.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  updatedAt: false,
  modelName: 'trade_request'
})

module.exports = TradeRequest