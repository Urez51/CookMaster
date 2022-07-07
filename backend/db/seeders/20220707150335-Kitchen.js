module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Kitchens', [{
      title: 'Тайская кухня',
      descr: 'Тайская кухня — национальная кухня Таиланда, считающаяся одной из лучших, самых оригинальных и известных в мире, ассоциируется, прежде всего, со вкусом бананов, цитрусовых, ананасов, кокосового молока, свежего кориандра, лимонника, чеснока и стручкового перца — чили.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Kitchens', [{
      title: 'Турецкая кухня',
      descr: 'Второе место в списке самых известных кухонь мира занимает национальная кухня Турции, входящая в ряды лучших по богатству, многообразию вкусов и используемых продуктов.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Kitchens', [{
      title: 'Тайская кухня',
      descr: 'Тайская кухня — национальная кухня Таиланда, считающаяся одной из лучших, самых оригинальных и известных в мире, ассоциируется, прежде всего, со вкусом бананов, цитрусовых, ананасов, кокосового молока, свежего кориандра, лимонника, чеснока и стручкового перца — чили.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Kitchens', [{
      title: 'Индийская кухня',
      descr: 'Индийская кухня — одна из самых старых и разнообразных кухонь мира, известная, прежде всего, своими вегетарианскими блюдами. На этом густонаселённом полуострове проживает такое множество народов, что очень трудно охарактеризовать в нескольких фразах типичную индийскую кухню.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Kitchens', null, {});
  },
};
