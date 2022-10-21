const router = require('express').Router();
const { TradeComment } = require('../models');
const { tokenExtractor } = require('../util/middleware');

router.post('/', tokenExtractor, async (req, res) => {
  try {
    const comment = await TradeComment.create({ ...req.body /* userId: req.decodedToken.id */ });
    res.json(comment);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
