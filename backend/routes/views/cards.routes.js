const cardsRouter = require('express').Router();
const { Recipe } = require('../../db/models/index');

cardsRouter.route('/')
  .get(async (req, res) => {
    const card = await Recipe.findAll({ raw: true });
    res.json(card);
  });


module.exports = cardsRouter;
