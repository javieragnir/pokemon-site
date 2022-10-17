const router = require('express').Router()
const { TradeRequest, User } = require('../models')
const { sequelize } = require('../util/db')
const { tokenExtractor } = require('../util/middleware')

router.get('/', async (req, res) => {
  const trades = await TradeRequest.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'username']
      },
      'offered',
      'requested',
    ],
  })
  res.json(trades)
})

router.post('/', tokenExtractor, async (req, res) => {
  const trade = await TradeRequest.create({...req.body, userId: req.decodedToken.id })
  const trades = await TradeRequest.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'username']
      },
      'offered',
      'requested',
    ],
  })
  res.json(trades)
})

module.exports = router