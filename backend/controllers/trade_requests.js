const router = require('express').Router()
const { TradeRequest } = require('../models')
const { sequelize } = require('../util/db')

router.get('/', async (req, res) => {
  const trades = await TradeRequest.findAll({
    include: [
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