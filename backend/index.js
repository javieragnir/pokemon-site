const express = require('express');

const app = express();
const cors = require('cors');
require('express-async-errors');

const { PORT, HOST } = require('./util/config');
const { connectToDatabase } = require('./util/db');

const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const tradeRouter = require('./controllers/trade_requests');
const pokemonRouter = require('./controllers/pokemon');
const commentRouter = require('./controllers/trade_comments');

const { errorHandler } = require('./util/middleware');

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/trade', tradeRouter);
app.use('/api/pokemon', pokemonRouter);
app.use('/api/comments', commentRouter);

app.use(errorHandler);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, HOST, () => {
    console.log(`Server running on port ${HOST}:${PORT}`);
  });
};

start();
