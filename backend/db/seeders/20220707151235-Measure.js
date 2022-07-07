module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Measures', [{
      type: 'г',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Measures', [{
      type: 'мл',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Measures', [{
      type: 'шт',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Measures', [{
      type: 'щепото4кииииии',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Measures', null, {});
  },
};
