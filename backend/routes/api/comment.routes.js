const router = require('express').Router();
const {
  Comment, User,
} = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const CommentsAll = await Comment.findAll({
      raw: true,
      include: [{ model: User, attributes: ['name', 'surname'] }],
      where: {
        recipe_id: id,
      },
      order: [
        ['updatedAt', 'DESC'],
      ],
    });

    const commentUpdate = CommentsAll.map((item) => {

    });
    res.json(CommentsAll);
  } catch (error) {
    res.json({ message: 'Произошла ошибка' });
  }
});

router.post('/', async (req, res) => {
  try {
    const userId = req.session.user.id;
    const { id, body } = req.body;
    const comment = await Comment.create({
      recipe_id: id,
      user_id: userId,
      body,
    });
    const commentWithUser = await Comment.findOne({
      raw: true,
      where: {
        id: comment.id,
      },
      include: [{ model: User, attributes: ['name', 'surname'] }],
    });
    res.json(commentWithUser);
  } catch (error) {
    res.json({ message: 'Произошла ошибка' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const idComments = req.params.id;
    const comment = await Comment.destroy({
      where: {
        id: idComments,
      },
    });

    res.json(idComments);
  } catch (error) {
    res.json({ message: 'Произошла ошибка' });
  }
});

module.exports = router;
