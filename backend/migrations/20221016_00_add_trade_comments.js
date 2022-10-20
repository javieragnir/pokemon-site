const { DataTypes } = require('sequelize');

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('trade_comments', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
      },
      trade_request_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'trade_requests', key: 'id' },
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('trade_comments');
  },
};
