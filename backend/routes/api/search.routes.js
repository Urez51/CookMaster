const router = require('express').Router();
const { Op } = require('sequelize');
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
router.post('/ingridients', async (req, res) => {
  try {
    const { id } = req.session.user;
    const ingridients = req.body;
    // console.log(ingridients);
    const arrIdIngridients = ingridients.map((el) => el.id);
    // console.log(arrIdIngridients);
    // const recipe = await Recipe_product.findAll({
    //   raw: true,
    //   // where: {
    //   //   prdoduct_id:{ [Op.and]:arrIdIngridients,},
    //   // },
    //   include: [{
    //     model: Recipe,
    //     attributes: ['title', 'body', 'img'],
    //     where: {
    //       delete_visible: false,
    //       private: false,
    //     },
    //   },
    //   {
    //     model: Product,
    //     attributes: ['name'],
    //     where:  arrIdIngridients ,
    //   }],
    // });
    const recipes = await Recipe.findAll({
      raw: true,
      where: {
        delete_visible: false,
        private: false,
      },
      include: [{
        model: Recipe_product,
      }],
    });
    // console.log(recipes);
    console.log(recipes);
    res.json(ing);
  } catch (error) {
    res.json({ message: 'Произошла ошибка поиска рецепта (/search)' });
  }
});

module.exports = router;
