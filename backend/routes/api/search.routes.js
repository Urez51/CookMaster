const router = require('express').Router();
const {
  Recipe, sequelize, Recipe_product, Product,
} = require('../../db/models/index');

router.post('/name', async (req, res) => {
  try {
    const { id } = req.session.user;
    const inputValue = req.body.title;
    const recipe = await Recipe_product.findAll({
      raw: true,
      include: [{
        model: Recipe,
        attributes: ['title', 'body', 'img'],
        where: {
          title: sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), 'LIKE', `%${inputValue}%`),
          delete_visible: false,
          private: false,
        },
      },
      {
        model: Product,
        attributes: ['name'],
      }],
    });
    res.json(recipe);
  } catch (error) {
    res.json({ message: 'Произошла ошибка поиска рецепта (/search)' });
  }
});

module.exports = router;
