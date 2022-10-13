const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('trade_requests', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' }
      },
      offered_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'pokemon', key: 'id' }
      },
      requested_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'pokemon', key: 'id' }
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
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('trade_requests')
  }
}