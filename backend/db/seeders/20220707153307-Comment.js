module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Comments', [{
      recipe_id: 1,
      user_id: 1,
      body: 'Супер рецепт',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Comments', [{
      recipe_id: 2,
      user_id: 2,
      body: 'На любителя',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
