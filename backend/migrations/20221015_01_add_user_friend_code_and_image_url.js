const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn('users', 'friend_code', {
      type: DataTypes.STRING,
      validate: {
        is: /^(SW-)?[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/
      }
    })
    await queryInterface.addColumn('users', 'profile_picture_url', {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn('users', 'friend_code')
    await queryInterface.removeColumn('trade_requests', 'closed')
  }
}