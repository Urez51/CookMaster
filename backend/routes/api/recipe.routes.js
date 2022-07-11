const router = require('express').Router();
const { Recipe } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { id } = req.session.user;
    const recipe = await Recipe.findAll({
      raw: true,
      where: {
        user_id: id,
        delete_visible: false,
      },
      order: [
        ['updatedAt', 'DESC'],
      ],
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
      order: [
        ['updatedAt', 'DESC'],
      ],
    });
    res.json(recipes);
  } catch (error) {
    res.json({ message: 'Произошла ошибка удаления' });
  }
});
router.post('/new', async (req, res) => {
  try {
    const { id } = req.session.user;
    const { title, body, img } = req.body.recipe;
    console.log(title,body,img);
    if (title.length === 0 || body.length === 0 || img.length === 0) {
      res.json({ errorMessage: 'Поля не могут быть пустыми' });
    } else {
      const recipe = await Recipe.create({
        title, body, img, user_id: id,
      });
      res.json({message: 'Рецепт успешно добавлен!'});
    }
    // Recipe.create({
    //   title, body, img, user_id: id,
    // });
  } catch (error) {
    res.json({ message: 'Произошла ошибка добавления' });
  }
});

router.post('/:id', async (req, res) => {
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
    const userId = req.session.user.id;
    const recipes = await Recipe.findAll({
      where: {
        user_id: userId,
        delete_visible: false,
      },
      order: [
        ['updatedAt', 'DESC'],
      ],
    });
    res.json(recipes);
  } catch (error) {
    res.json({ message: 'Произошла ошибка публикации рецепта' });
  }
});

router.get('/publish', async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      raw: true,
      where: {
        moder_visible: true,
        private: true,
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

router.post('/publish/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findOne({
      where: { id },
    });
    recipe.moder_visible = false;
    recipe.private = false;
    await recipe.save();

    const recipes = await Recipe.findAll({
      raw: true,
      where: {
        moder_visible: true,
        private: true,
      },
      order: [
        ['updatedAt', 'DESC'],
      ],
    });
    console.log('publish/:id')
    res.json(recipes);
  } catch (error) {
    res.json({ message: 'Произошла ошибка подтверждения публикации рецепта в личном кабинете администратора' });
  }
});

// router.delete('/publish/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const recipe = await Recipe.findOne({
//       where: { id },
//     });
//     recipe.moder_visible = false;
//     await recipe.save();
//   } catch (error) {
//     res.json({ message: 'Произошла ошибка удаления рецепта в личном кабинете администратора' });
//   }
// });

module.exports = router;
