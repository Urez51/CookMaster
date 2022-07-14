const router = require('express').Router();
const {
  Recipe, Recipe_product, Product,
} = require('../../db/models');

router.get('/', async (req, res) => {
  const product = await Product.findAll({
    raw: true,
  });
  res.json(product);
});

router.post('/', async (req, res) => {
  try {
    const products = await Recipe_product.findAll({
      raw: true,
      include: [Recipe, Product],
      order: [
        ['updatedAt', 'DESC'],
      ],
    });
    recipes.map((item) => {
      item.products = [];
      products.forEach((el) => {
        if (item.id === el['Recipe.id']) {
          item.products.push(el['Product.name']);
        }
      });
    });
    res.json(products);
    console.log('product', products);
  } catch (error) {
    res.json({ message: 'Произошла ошибка Recipe_product' });
  }
});

// router.get('/all', async (req, res) => {
//   try {
//     const recipe = await Recipe.findAll({
//       raw: true,
//       where: {
//         delete_visible: false,
//         private: false,
//       },
//       order: [
//         ['updatedAt', 'DESC'],
//       ],
//     });

//     const products = await Recipe_product.findAll({
//       raw: true,
//       include: [Recipe, Product],
//       order: [
//         ['updatedAt', 'DESC'],
//       ],
//     });
//     recipe.map((item) => {
//       item.products = [];
//       products.forEach((el) => {
//         if (item.id === el['Recipe.id']) {
//           item.products.push(el['Product.name']);
//         }
//       });
//     });
//     res.json(recipe);
//   } catch (error) {
//     res.json({ message: 'Произошла ошибка get Recipe_product and Recipe' });
//   }
// });

module.exports = router;
