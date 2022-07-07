module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Products', [{
      name: 'Яйца',
      measure_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Products', [{
      name: 'Мука',
      measure_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Products', [{
      name: 'Греча',
      measure_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Products', [{
      name: 'Вода',
      measure_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Products', [{
      name: 'Соль',
      measure_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
