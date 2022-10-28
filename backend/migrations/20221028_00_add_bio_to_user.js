const { DataTypes } = require('sequelize');

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn('users', 'bio', {
      type: DataTypes.TEXT,
      validate: {
        len: [0, 1000],
      },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn('users', 'bio');
  },
};
