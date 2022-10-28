const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { tokenExtractor } = require('../util/middleware');

const findUserByUsername = async (req, res, next) => {
  req.user = await User.findOne({
    where: {
      username: req.params.username,
    },
    attributes: { exclude: ['passwordHash'] },
  });

  next();
};

router.get('/', async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ['passwordHash'] },
  });
  res.json(users);
});

router.get('/:username', findUserByUsername, async (req, res) => {
  if (!req.user) {
    return res.status(404).end();
  }

  return res.json(req.user);
});

router.post('/', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ error: 'New user requests must include username and password' });
  }

  const { username, password } = req.body;

  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long' });
  }

  if (!password.match(/^[a-z0-9]+$/i)) {
    return res.status(400).json({ error: 'Password must consist of alphanumeric characters only' });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = await User.create({ username, passwordHash });
  return res.json(user);
});

router.put('/:username/friendcode', findUserByUsername, async (req, res) => {
  if (!req.user) {
    return res.status(400).send({ error: 'User does not exist' });
  }

  req.user.friendCode = req.body.friendCode;
  await req.user.save();
  return res.json(req.user);
});

router.put('/:username/profilepicture', findUserByUsername, async (req, res) => {
  if (!req.user) {
    return res.status(400).send({ error: 'User does not exist' });
  }

  req.user.profilePictureUrl = req.body.profilePictureUrl;
  await req.user.save();
  return res.json(req.user);
});

router.put('/:username/profilepicture', findUserByUsername, tokenExtractor, async (req, res) => {
  if (!req.user) {
    return res.status(400).send({ error: 'User does not exist' });
  }

  if (req.decodedToken.id !== req.user.id) {
    return res.status(401).send({ error: 'User unauthorized to edit bio.' });
  }

  req.user.bio = req.body.bio;
  await req.user.save();
  return res.json(req.user);
});

module.exports = router;
