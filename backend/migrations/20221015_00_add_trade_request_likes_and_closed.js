const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn('trade_requests', 'likes', {
      type: DataTypes.INTEGER,
      defaultValue: 0
    })
    await queryInterface.addColumn('trade_requests', 'closed', {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn('trade_requests', 'likes')
    await queryInterface.removeColumn('trade_requests', 'closed')
  }
}