module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Recipes', [{
      title: 'Греча с яйцом',
      body: 'Греча с яйцом (с кайфом)',
      kitchen_id: 1,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipes', [{
      title: 'Вода с солью',
      body: 'водичка водица вода',
      kitchen_id: 2,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipes', [{
      title: 'Макароны с сыром',
      body: 'Макароны, сыр, все дела',
      kitchen_id: 1,
      user_id: 1,
      moder_visible: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipes', [{
      title: 'Пельмени',
      body: 'Пельмени со сметаной',
      kitchen_id: 1,
      user_id: 1,
      moder_visible: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipes', [{
      title: 'Говяжый дошик',
      body: 'Одумайся глупец',
      kitchen_id: 1,
      user_id: 1,
      moder_visible: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Recipes', null, {});
  },
};
