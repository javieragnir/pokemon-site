const router = require('express').Router();
const { TradeComment } = require('../models');
const { tokenExtractor } = require('../util/middleware');

router.post('/', tokenExtractor, async (req, res) => {
  const comment = await TradeComment.create({ ...req.body, userId: req.decodedToken.id });
  res.json(comment);
});

module.exports = router;
