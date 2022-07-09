const router = require('express').Router();
const { Recipe } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { id } = req.session.user;
    const recipe = await Recipe.findAll({
      raw: true,
      where: {
        user_id: id,
      },
    });
    res.json(recipe);
  } catch (error) {
    res.json({ message: 'Произошла ошибка' });
  }
});

module.exports = router;
