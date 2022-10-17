const router = require('express').Router()
const { TradeRequest, User } = require('../models')
const { sequelize } = require('../util/db')
const { tokenExtractor } = require('../util/middleware')

const getTrades = async () => {
  const trades = await TradeRequest.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'username']
      },
      'offered',
      'requested',
    ],
    order: [['createdAt', 'DESC']]
  })

  return trades
}

router.get('/', async (req, res) => {
  const trades = await getTrades()
  res.json(trades)
})

router.post('/', tokenExtractor, async (req, res) => {
  await TradeRequest.create({...req.body, userId: req.decodedToken.id })
  const trades = await getTrades()
  res.json(trades)
})

module.exports = router