module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 1,
      body: 'Сварить гречу, пожарить яйцо, смешать.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 1,
      body: 'Насладиться',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Steps', null, {});
  },
};
