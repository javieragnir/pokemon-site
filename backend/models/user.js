const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../util/db');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
    },
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  friendCode: {
    type: DataTypes.STRING,
    validate: {
      is: /^(SW-)?[0-9]{4}-[0-9]{4}-[0-9]{4}$/,
    },
  },
  profilePictureUrl: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
  },
}, {
  sequelize,
  underscored: true,
  modelName: 'user',
});

module.exports = User;
