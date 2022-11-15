const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '../', `${process.env.NODE_ENV}.env`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://postgres:fd81b92aa488c3f5debf2dd226ef237614cd4b64d679bd1a@localhost:5432/postgres',
  PORT: process.env.PORT || 3001,
  HOST: process.env.HOST || 'localhost',
  SECRET: process.env.SECRET,
};
