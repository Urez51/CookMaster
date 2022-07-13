const router = require('express').Router();
const {
  Recipe,
  Favorite_recipe,
  Product,
  Recipe_product,
} = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { id } = req.session.user;
    const favoriteRecipes = await Favorite_recipe.findAll({
      raw: true,
      include: [
        {
          model: Recipe,
          where: {
            delete_visible: false,
          },
        },
      ],
      where: {
        user_id: id,
      },
    });

    const products = await Recipe_product.findAll({
      raw: true,
      include: [Recipe, Product],
      order: [['updatedAt', 'DESC']],
    });

    favoriteRecipes.map((item) => {
      item.products = [];
      products.forEach((el) => {
        if (item.recipe_id === el['Recipe.id']) {
          item.products.push(el['Product.name']);
        }
      });
    });
    res.json(favoriteRecipes);
  } catch (error) {
    res.json({ message: 'Произошла ошибка получения избранных рецептов' });
  }
});

router.post('/:id', async (req, res) => {
  try {
    const recipeId = req.params.id;
    const userId = req.session.user.id;
    const favoriteRecipes = await Favorite_recipe.findAll({
      include: [
        {
          model: Recipe,
          where: {
            delete_visible: false,
          },
        },
      ],
      where: {
        user_id: userId,
        recipe_id: recipeId,
      },
    });
    if (favoriteRecipes.length) {
      await Favorite_recipe.destroy({
        where: {
          user_id: userId,
          recipe_id: recipeId,
        },
      });
    }
    if (!favoriteRecipes.length) {
      await Favorite_recipe.create({
        user_id: userId,
        recipe_id: recipeId,
      });
    }
    res.send('ok');
  } catch (error) {
    res.json({ message: 'Произошла ошибка добавления/удаления избранного' });
  }
});

module.exports = router;
