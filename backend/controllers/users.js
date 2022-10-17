const router = require('express').Router()
const bcrypt = require('bcrypt')
const { User } = require('../models')

router.get('/', async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ['passwordHash'] }
  })
  res.json(users)
})

router.get('/:username', async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.params.username
    },
    attributes: { exclude: ['passwordHash'] }
  })

  if (!user) {
    res.status(404).end()
  }

  res.json(user)
})

router.post('/', async (req, res) => {
  console.log('user model', User)

  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ error: 'New user requests must include username and password'})
  }

  const { username, password } = req.body

  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long'})
  }

  if (!password.match(/^[a-z0-9]+$/i)) {
    return res.status(400).json({ error: 'Password must consist of alphanumeric characters only' })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = await User.create({ username, passwordHash })
  res.json(user)
})

module.exports = router