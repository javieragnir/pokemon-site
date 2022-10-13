const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('pokemon', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('pokemon')
  }
}