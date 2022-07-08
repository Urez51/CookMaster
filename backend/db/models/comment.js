const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Recipe }) {
      Comment.belongsTo(User, { foreignKey: 'user_id' });
      Comment.belongsTo(Recipe, { foreignKey: 'recipe_id' });
    }
  }
  Comment.init({
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Recipes',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'Comments',
  });
  return Comment;
};
