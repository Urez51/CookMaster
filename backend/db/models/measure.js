const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Measure extends Model {
    static associate({ Product }) {
      Measure.hasMany(Product, { foreignKey: 'measure_id' });
    }
  }
  Measure.init({
    type: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Measure',
    tableName: 'Measures',
  });
  return Measure;
};
