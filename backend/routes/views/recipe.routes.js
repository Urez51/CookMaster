const router = require('express').Router();
const { Recipe } = require('../../db/models');

router.get('/recipe', async (req, res) => {
  try {
    const { id } = req.session;
    console.log(id);
    res.json({ mes: 'qq' });
    // const recipes = await
  } catch (error) {
    res.redirect('/error');
  }
});

module.exports = router;
