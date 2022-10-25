const router = require('express').Router();
const { Op, fn, col } = require('sequelize');
const {
  TradeRequest, User, Pokemon, TradeComment, TradeLike,
} = require('../models');
const { tokenExtractor } = require('../util/middleware');

const getTrades = async (query = '') => {
  let where = {};

  if (query) {
    where = {
      [Op.or]: [
        {
          content: {
            [Op.iLike]: `%${query}%`,
          },
        },
        {
          '$offered.name$': {
            [Op.iLike]: `%${query}%`,
          },
        },
        {
          '$requested.name$': {
            [Op.iLike]: `%${query}%`,
          },
        },
      ],
    };
  }

  const trades = await TradeRequest.findAll({
    attributes: {
      exclude: ['userId', 'offeredId', 'requestedId'],
    },
    include: [
      {
        model: User,
        attributes: ['id', 'username'],
      },
      {
        model: TradeComment,
        attributes: ['id'],
      },
      {
        model: Pokemon,
        as: 'offered',
      },
      {
        model: Pokemon,
        as: 'requested',
      },
      {
        model: User,
        as: 'users_liked',
        attributes: ['id', 'username'],
        through: {
          attributes: [],
        },
      },
    ],
    where,
    order: [['createdAt', 'DESC']],
  });

  return trades;
};

router.get('/', async (req, res) => {
  let query = '';
  if (req.query.search) {
    query = req.query.search;
  }

  const trades = await getTrades(query);
  res.json(trades);
});

router.get('/:id', async (req, res) => {
  const trade = await TradeRequest.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['id', 'username'],
      },
      {
        model: TradeComment,
        include: [
          {
            model: User,
            attributes: ['id', 'username'],
          },
        ],
      },
      'offered',
      'requested',
      {
        model: User,
        as: 'users_liked',
        attributes: ['id', 'username'],
        through: {
          attributes: [],
        },
      },
    ],
  });

  res.json(trade);
});

router.get('/by-user/:userId', async (req, res) => {
  const trades = await TradeRequest.findAll({
    where: {
      userId: req.params.userId,
    },
    include: [
      {
        model: User,
        attributes: ['id', 'username'],
      },
      {
        model: TradeComment,
      },
      'offered',
      'requested',
      {
        model: User,
        as: 'users_liked',
        attributes: ['id', 'username'],
        through: {
          attributes: [],
        },
      },
    ],
    order: [['createdAt', 'DESC']],
  });

  res.json(trades);
});

router.post('/', tokenExtractor, async (req, res) => {
  // doing it this way so that only one query is made to the server when
  // adding a new post. Maybe it just doing two queries would be simpler
  // and still good enough.

  let query = '';
  if (req.query.search) {
    query = req.query.search;
  }

  await TradeRequest.create({ ...req.body, userId: req.decodedToken.id });
  const trades = await getTrades(query);
  res.json(trades);
});

router.delete('/:id', tokenExtractor, async (req, res) => {
  const trade = await TradeRequest.findByPk(req.params.id);

  if (!trade) {
    return res.status(204).end();
  }

  if (trade && trade.userId === req.decodedToken.id) {
    await trade.destroy();
    return res.status(204).end();
  }

  return res.status(400).send({ error: 'user id does not match id of user who posted trade' });
});

router.post('/:id/like', tokenExtractor, async (req, res) => {
  const like = await TradeLike.create({
    tradeRequestId: req.params.id,
    userId: req.decodedToken.id,
  });

  return res.json(like);
});

router.delete('/:id/like', tokenExtractor, async (req, res) => {
  const like = await TradeLike.findOne({
    where: {
      tradeRequestId: req.params.id,
      userId: req.decodedToken.id,
    },
  });

  if (like) {
    await like.destroy();
  }

  return res.status(204).end();
});

module.exports = router;
