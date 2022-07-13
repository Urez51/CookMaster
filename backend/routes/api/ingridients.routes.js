const ingidientsRouter = require('express').Router();
const { Product } = require('../../db/models');
ingidientsRouter.get('/',async(req,res)=>{
  try {
 const ingridients = await Product.findAll()
 res.json({ingridients})
  }catch{
    res.json({message: 'Произошла ошибка получения рецептов на проверку'})
  }
})





module.exports = ingidientsRouter
