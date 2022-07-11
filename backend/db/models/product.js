/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Recipe_product }) {
      Product.hasMany(Recipe_product, { foreignKey: 'product_id' });
    }
  }
  Product.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    measure: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'Products',
  });
  return Product;
};
