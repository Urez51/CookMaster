module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Recipes', [{
      title: 'Мягкая говяжья печень на сковороде',
      body: 'Приготовить мягкую говяжью печень на сковороде необыкновенно просто, однако у многих она получается сухой, жесткой и невкусной. В чем секрет? В том, что некоторые пытаются готовить печень по аналогии с мясом, мол, чем дольше ее тушить, тем мягче будет. Так вот, с этим субпродуктом все ровно наоборот! Если печенка проведет на сковороде более пятнадцати минут, приятных гастрономических впечатлений не ждите.',
      kitchen_id: 5,
      user_id: 1,
      img
      moder_visible: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Recipes', null, {});
  },
};
