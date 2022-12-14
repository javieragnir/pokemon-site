const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../util/db');

class Pokemon extends Model {}

Pokemon.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  freezeTableName: true,
  modelName: 'pokemon',
});

module.exports = Pokemon;
