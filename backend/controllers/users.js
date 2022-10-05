const router = require('express').Router()
const bcrypt = require('bcrypt')
const { User } = require('../models')

router.get('/', async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ['passwordHash'] }
  })
  res.json(users)
})

router.post('/', async (req, res) => {
  console.log('user model', User)

  if (!req.body.username || !req.body.password) {
    res.status(400).json({ error: 'New user requests must include username and password'})
  }

  const { username, password } = req.body

  if (password.length < 8) {
    res.status(400).json({ error: 'Password must be at least 8 characters long'})
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = await User.create({ username, passwordHash })
  res.json(user)
})

module.exports = router