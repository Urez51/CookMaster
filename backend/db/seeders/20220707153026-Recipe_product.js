module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Recipe_products', [{
      product_id: 1,
      recipe_id: 1,
      product_value: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipe_products', [{
      product_id: 2,
      recipe_id: 2,
      product_value: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Recipe_products', null, {});
  },
};
