const { DataTypes } = require('sequelize');

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('trade_comment_likes', {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        primaryKey: true,
      },
      trade_comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'trade_comments', key: 'id' },
        primaryKey: true,
      },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('trade_comment_likes');
  },
};
