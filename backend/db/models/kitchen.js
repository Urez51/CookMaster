const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Kitchen extends Model {
    static associate({ Recipe }) {
      Kitchen.hasMany(Recipe, { foreignKey: 'kitchen_id' });
    }
  }
  Kitchen.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    descr: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Kitchen',
    tableName: 'Kitchens',
  });
  return Kitchen;
};
