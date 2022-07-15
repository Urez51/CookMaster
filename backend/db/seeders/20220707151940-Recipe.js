module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Recipes', [{
      title: 'Мягкая говяжья печень на сковороде',
      body: 'Приготовить мягкую говяжью печень на сковороде необыкновенно просто, однако у многих она получается сухой, жесткой и невкусной. В чем секрет? В том, что некоторые пытаются готовить печень по аналогии с мясом, мол, чем дольше ее тушить, тем мягче будет. Так вот, с этим субпродуктом все ровно наоборот! Если печенка проведет на сковороде более пятнадцати минут, приятных гастрономических впечатлений не ждите.',
      kitchen_id: 5,
      user_id: 2,
      img: '/photo/МягкаяПечень.jpg',
      moder_visible: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipes', [{
      title: 'Плов с грибами',
      body: 'Плов с грибами отлично подойдет людям, которые держат пост или не едят мясо. Грибы и специи можно брать те, которые вы больше всего любите, острый перец можно не класть, если вы не едите острое.',
      kitchen_id: 2,
      user_id: 2,
      img: '/photo/plov.jpg',
      moder_visible: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipes', [{
      title: 'Салат Цезарь с курицей в домашних условиях',
      body: 'Приготовить салат «Цезарь» с курицей в домашних условиях может каждый, настолько это блюдо простое и быстрое. А вот его вкус будет во многом зависеть от соуса.',
      kitchen_id: 2,
      user_id: 2,
      img: '/photo/cesar.jpg',
      moder_visible: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipes', [{
      title: 'Свекольник с колбасой',
      body: 'Приготовьте в жаркий летний день свекольник с колбасой, и ваши близкие, изрядно утомленные окрошкой, скажут вам огромное спасибо.',
      kitchen_id: 5,
      user_id: 2,
      img: '/photo/svek.jpg',
      moder_visible: false,
      private: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipes', [{
      title: 'Клубничный конфитюр',
      body: 'Клубничный конфитюр — идеальная «компания» для утренних тостов с маслом: после такого завтрака организм не только проснется, но и получит запас позитивной энергии на весь день.',
      kitchen_id: 5,
      user_id: 2,
      img: '/photo/klub.jpg',
      moder_visible: false,
      private: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipes', [{
      title: 'Ростбиф классический в духовке',
      body: 'Подавайте ростбиф тонко нарезанным',
      kitchen_id: 5,
      user_id: 2,
      img: '/photo/rost.jpg',
      moder_visible: false,
      private: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipes', [{
      title: 'Жаровня со свининой в сливочно-грибном соусе',
      body: 'Жаровня со свининой в сливочно-грибном соусе - блюдо на большую компанию. Свинина и пара-тройка кружек пива - все, что нужно для празднования Октоберфеста.',
      kitchen_id: 5,
      user_id: 2,
      img: '/photo/svinina.jpg',
      moder_visible: false,
      private: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipes', [{
      title: 'Гуляш из свинины на сковороде с подливкой',
      body: 'Гуляш из свинины на сковороде с подливкой любят многие, но далеко не все умеют его готовить. Мы готовы раскрыть «секрет» и поделиться одним из рецептов этого замечательного блюда.',
      kitchen_id: 5,
      user_id: 2,
      img: '/photo/gulash.jpg',
      moder_visible: false,
      private: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Recipes', [{
      title: 'Как приготовить самый вкусный оливье',
      body: 'В середине XIX века в Москве, в трактире «Эрмитаж», повар-француз Люсьен Оливье придумал салат, который очень быстро стал известен всем московским гурманам того времени. Рецепт салата хранился в большом секрете и остался неразгаданным до сих пор. Точно известно, что в нем были рябчики, паюсная икра, телячий язык и раковые шейки.',
      kitchen_id: 5,
      user_id: 2,
      img: '/photo/olive.jpg',
      moder_visible: false,
      private: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Recipes', null, {});
  },
};
