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

router.get('/:userId', async (req, res) => {
  const trades = await TradeRequest.findAll({
    where: {
      userId: req.params.userId
    },
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

  res.json(trades)
})

router.post('/', tokenExtractor, async (req, res) => {
  await TradeRequest.create({...req.body, userId: req.decodedToken.id })
  const trades = await getTrades()
  res.json(trades)
})

router.delete('/:id', tokenExtractor, async (req, res) => {
  const trade = await TradeRequest.findByPk(req.params.id)

  if (!trade) {
    return res.status(204).end()
  }

  if (trade && trade.userId === req.decodedToken.id) {
    await trade.destroy()
    res.status(204).end()
  } else {
    res.status(400).send({ error: 'user id does not match id of user who posted trade'})
  }
})

module.exports = router