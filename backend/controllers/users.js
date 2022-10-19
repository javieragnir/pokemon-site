const router = require('express').Router()
const bcrypt = require('bcrypt')
const { User } = require('../models')

const findUserByUsername = async (req, res, next) => {
    req.user = await User.findOne({
    where: {
      username: req.params.username
    },
    attributes: { exclude: ['passwordHash'] }
  })

  next()
}

router.get('/', async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ['passwordHash'] }
  })
  res.json(users)
})

router.get('/:username', findUserByUsername, async (req, res) => {
  if (!req.user) {
    return res.status(404).end()
  }

  res.json(req.user)
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

router.put('/:username/profilepicture', findUserByUsername, async (req, res) => {
  if (req.user) {
    req.user.profilePictureUrl = req.body.profilePictureUrl
    await req.user.save()
    res.json(req.user)
  } else {
    return res.status(400).send({ error: 'User does not exist' })
  }
})

module.exports = router