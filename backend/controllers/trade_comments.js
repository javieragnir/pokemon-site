const router = require('express').Router();
const { TradeComment } = require('../models');
const TradeCommentLike = require('../models/trade_comment_like');
const { tokenExtractor } = require('../util/middleware');

router.post('/', tokenExtractor, async (req, res) => {
  const comment = await TradeComment.create({ ...req.body, userId: req.decodedToken.id });
  res.json(comment);
});

router.delete('/:id', tokenExtractor, async (req, res) => {
  const comment = await TradeComment.findByPk(req.params.id);

  if (!comment) {
    return res.status(204).end();
  }
  if (comment.userId === req.decodedToken.id) {
    await comment.destroy();
    return res.status(204).end();
  }

  return res.status(401).send({ error: 'user id does not match id of user who posted trade' });
});

router.post('/:id/like', tokenExtractor, async (req, res) => {
  const like = await TradeCommentLike.create({
    tradeCommentId: req.params.id,
    userId: req.decodedToken.id,
  });

  res.json(like);
});

router.delete('/:id/like', tokenExtractor, async (req, res) => {
  const like = await TradeCommentLike.findOne({
    where: {
      tradeCommentId: req.params.id,
      userId: req.decodedToken.id,
    },
  });

  if (like) {
    await like.destroy();
  }

  return res.status(204).end();
});

module.exports = router;
