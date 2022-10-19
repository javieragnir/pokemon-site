const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('trade_requests', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    })
    await queryInterface.addColumn('trade_requests', 'user_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' }
    })
    await queryInterface.addColumn('trade_requests', 'offered_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'pokemon', key: 'id' }
    })
    await queryInterface.addColumn('trade_requests', 'requested_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'pokemon', key: 'id' }
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('trade_requests')
    await queryInterface.removeColumn('trade_requests', 'user_id')
    await queryInterface.removeColumn('trade_requests', 'offered_id')
    await queryInterface.removeColumn('trade_requests', 'requested_id')
  }
}