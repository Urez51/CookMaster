const publishRouter = require('express').Router();
const {
  Recipe, Step, Recipe_product, Product,
} = require('../../db/models');

publishRouter.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      where: {
        moder_visible: true,
        delete_visible: false,
      },
      order: [
        ['updatedAt', 'DESC'],
      ],
    });
    res.json(recipes);
  } catch (error) {
    res.json({ message: 'Произошла ошибка получения рецептов на проверку' });
  }
});

publishRouter.post('/moder/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findOne(
      {
        where: {
          id,
        },
      },
    );
    recipe.moder_visible = true;
    await recipe.save();
    // const userId = req.session.user.id;
    // const recipes = await Recipe.findAll({
    //   where: {
    //     user_id: userId,
    //     delete_visible: false,
    //   },
    //   order: [
    //     ['updatedAt', 'DESC'],
    //   ],
    // });
    res.json({ message: 'ok' });
  } catch (error) {
    res.json({ message: 'Произошла ошибка публикации рецепта' });
  }
});

publishRouter.post('/private/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findOne({
      where: { id },
    });
    recipe.moder_visible = false;
    recipe.private = false;
    await recipe.save();
    // const recipes = await Recipe.findAll({
    //   raw: true,
    //   where: {
    //     moder_visible: true,
    //     delete_visible: false,
    //   },
    //   order: [
    //     ['updatedAt', 'DESC'],
    //   ],
    // });
    res.json({ message: 'ok' });
  } catch (error) {
    res.json({ message: 'Произошла ошибка подтверждения публикации рецепта в личном кабинете администратора' });
  }
});

publishRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findOne({
      where: { id },
    });
    recipe.moder_visible = false;
    recipe.private = true;
    await recipe.save();
    // const recipes = await Recipe.findAll({
    //   raw: true,
    //   where: {
    //     moder_visible: true,
    //     private: true,
    //     delete_visible: false,
    //   },
    //   order: [
    //     ['updatedAt', 'DESC'],
    //   ],
    // });
    res.json({ message: 'ok' });
  } catch (error) {
    res.json({ message: 'Произошла ошибка отклонения рецепта на публикацию в личном кабинете администратора' });
  }
});

module.exports = publishRouter;
