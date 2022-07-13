const searchGlobalRouter = require('express').Router();
const { Op } = require('sequelize');
const { Recipe, sequelize } = require('../../db/models/index');

searchGlobalRouter.route('/')
  .post(async (req, res) => {
    console.log(req.body);
    const { title } = req.body;
    const card = await Recipe.findAll(
      {
        raw: true,
        where: {
          title: sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), 'LIKE', `%${title.toLowerCase()}%`),
          delete_visible: false,
          private: false,
        },
      },
    );
    console.log('card', card);
    res.json(card);
  });

module.exports = searchGlobalRouter;
