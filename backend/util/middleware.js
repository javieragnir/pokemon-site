const jwt = require('jsonwebtoken');
const { SECRET } = require('./config');

const errorHandler = (error, request, response, next) => {
  console.error(error);

  response.status(400).send({ error: `Something went wrong: ${error}` });

  next();
};

const tokenExtractor = (req, res, next) => {
  const authorization = req.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    try {
      req.decodedToken = jwt.verify(authorization.substring(7), SECRET);
    } catch (error) {
      return res.status(401).json({ error: 'token invalid' });
    }
  } else {
    return res.status(401).json({ error: 'token missing' });
  }

  return next();
};

module.exports = {
  errorHandler,
  tokenExtractor,
};
