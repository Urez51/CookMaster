const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe_product extends Model {
    static associate({ Recipe, Product }) {
      Recipe_product.belongsTo(Recipe, { foreignKey: 'recipe_id' });
      Recipe_product.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  Recipe_product.init({
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Recipes',
        key: 'id',
      },
    },
    product_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Recipe_product',
    tableName: 'Recipe_products',
  });
  return Recipe_product;
};
