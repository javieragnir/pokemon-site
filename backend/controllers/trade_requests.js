const router = require('express').Router()
const { TradeRequest, User } = require('../models')
const { sequelize } = require('../util/db')

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

router.post('/', async (req, res) => {
  const trade = await TradeRequest.create(req.body)
  res.json(trade)
})

module.exports = router