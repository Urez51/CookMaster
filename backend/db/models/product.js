/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Measure, Recipe_product }) {
      Product.belongsTo(Measure, { foreignKey: 'measure_id' });
      Product.hasMany(Recipe_product, { foreignKey: 'product_id' });
    }
  }
  Product.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    measure_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Measures',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'Products',
  });
  return Product;
};
