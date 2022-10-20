const router = require('express').Router();
const { Op } = require('sequelize');
const { TradeRequest, User, Pokemon } = require('../models');
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
    attributes: { exclude: ['userId', 'offeredId', 'requestedId'] },
    include: [
      {
        model: User,
        attributes: ['id', 'username'],
      },
      {
        model: Pokemon,
        as: 'offered',
      },
      {
        model: Pokemon,
        as: 'requested',
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
      'offered',
      'requested',
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
      'offered',
      'requested',
    ],
    order: [['createdAt', 'DESC']],
  });

  res.json(trades);
});

router.post('/', tokenExtractor, async (req, res) => {
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

module.exports = router;
