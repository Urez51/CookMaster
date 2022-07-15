const router = require('express').Router();
const { Op } = require('sequelize');
const {
  Recipe, sequelize, Recipe_product, Product, Favorite_recipe
} = require('../../db/models/index');

router.post('/name', async (req, res) => {
  try {
    let id;
    try {
      id = req.session.user.id;
    } catch (e) {
      id = -1;
    }
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
    let id;
    try {
      id = req.session.user.id;
    } catch (e) {
      id = -1;
    }
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
      where: {
        delete_visible: false,
        private: false,
      },
      include: [{
        model: Recipe_product,
        include:[{
          model: Product,
          attributes: ['name'],
        }],
      },{
        model: Favorite_recipe,
        where:{
          user_id : id
        },
        required: false,
      }],
    });
    // console.log(recipes);
    const checker = (arr, target) => target.every(v => arr.includes(v));
    const needRecipes = recipes.filter((recipe)=> checker(recipe.Recipe_products.map((el)=> el.product_id),arrIdIngridients))
    // console.log(recipes);
    res.json(needRecipes);
  } catch (error) {
    res.json({ message: 'Произошла ошибка поиска рецепта (/search)' });
  }
});

module.exports = router;
