const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite_recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Recipe }) {
      Favorite_recipe.belongsTo(User, { foreignKey: 'user_id' });
      Favorite_recipe.belongsTo(Recipe, { foreignKey: 'recipe_id' });
    }
  }
  Favorite_recipe.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
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
  }, {
    sequelize,
    modelName: 'Favorite_recipe',
    tableName: 'Favorite_recipes',
  });
  return Favorite_recipe;
};
