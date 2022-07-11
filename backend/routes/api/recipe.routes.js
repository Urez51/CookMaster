const router = require('express').Router();
const {
  Recipe, Step, Recipe_product, Product,
} = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { id } = req.session.user;
    const recipe = await Recipe.findAll({
      raw: true,
      where: {
        user_id: id,
        delete_visible: false,
      },
    });
    res.json(recipe);
  } catch (error) {
    res.json({ message: 'Произошла ошибка' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findOne(
      {
        where: {
          id,
        },
      },
    );

    recipe.delete_visible = true;
    await recipe.save();
    const userId = req.session.user.id;
    const recipes = await Recipe.findAll({
      where: {
        user_id: userId,
        delete_visible: false,
      },
    });
    res.json(recipes);
  } catch (error) {
    res.json({ message: 'Произошла ошибка удаления' });
  }
});
router.post('/', (req, res) => {
  try {
    const { id } = req.session.user;
    const { title, body, img } = req.body;
    Recipe.create({
      title, body, img, user_id: id,
    });
  } catch (error) {
    res.json({ message: 'Произошла ошибка добавления' });
  }
});

// Recipe, Step, Recipe_product, Product

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findAll({
      raw: true,
      where: {
        id,
        delete_visible: false,
      },
    });
    const steps = await Step.findAll({
      raw: true,
      where: {
        recipe_id: id,
      },
    });
    const recipeProduct = await Recipe_product.findAll({
      raw: true,
      include: [Product.name],
      where: {
        recipe_id: id,
      },
    });
    res.json({ recipe, steps, recipeProduct });
  } catch (error) {
    res.json({ message: 'Произошла ошибка' });
  }
});

module.exports = router;
