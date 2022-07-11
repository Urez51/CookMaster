module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Favorite_recipes', [{
      user_id: 2,
      recipe_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Favorite_recipes', [{
      user_id: 1,
      recipe_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Favorite_recipes', null, {});
  },
};
