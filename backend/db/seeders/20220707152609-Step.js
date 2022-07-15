module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 1,
      body: 'Подготовьте все ингредиенты. Говяжью печенку вымойте и с помощью острого ножа удалите все пленки и протоки, чтобы после жарки и тушения она получилась действительно мягкой.',
      img: '/photo/magkaya1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 1,
      body: 'Нарежьте печень полосками. Репчатый лук очистите и нарежьте тонкими полукольцами. В сковороде нагрейте растительное масло. Подрумяньте на нем лук до легкого золотистого цвета (5 минут на среднем огне).',
      img: '/photo/magkaya2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 1,
      body: 'Добавьте в сковороду к луку нарезанную печень. Жарьте, периодически перемешивая кулинарной лопаткой на среднем огне 7 минут. Следите, чтобы кусочки печени не подгорели!',
      img: '/photo/magkaya3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 1,
      body: 'Положите в сковороду к печени с луком сметану. Чеснок очистите. Пропустите через пресс непосредственно в сметану. Посолите, поперчите и перемешайте. Тушите без крышки на среднем огне 5 минут.',
      img: '/photo/magkaya4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 1,
      body: 'Оставьте печень в сметане под крышкой еще на 5 минут, затем разложите по порционным тарелкам и посыпьте измельченной зеленью. В качестве гарнира идеально подойдет картофельное пюре или отварной рис.',
      img: '/photo/magkaya5.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 2,
      body: 'Морковь вымойте, очистите и нарежьте тонкой соломкой. Лук очистите и нарежьте кубиками. В сковороде с толстым дном или казане, где будете готовить плов с грибами, разогрейте растительное масло и обжарьте овощи до светло золотистого цвета, примерно 7 минут.',
      img: '/photo/plov1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 2,
      body: 'К жареным овощам добавьте грибы, предварительно очищенные и порезанные. Жарьте все вместе 15 минут, поперчите и посолите по вкусу. Добавьте семена зиры, с ними плов с гибами будет очень вкусный.',
      img: '/photo/plov2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 2,
      body: 'Подготовьте рис для плова с грибами. В большой миске, холодной водой промойте вместе белый и дикий рис. Воду меняйте 5-6 раз, чтобы рис хорошо промылся от крахмала и при варке не склеивался. Если вы хотите, чтобы дикий рис был более мягкий в готовом плове, предварительно его замочите в кипятке на 20 минут.',
      img: '/photo/plov3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 2,
      body: 'Рис выложите на овощи с грибами и разровняйте. Залейте примерно 300 гр. кипятка, посолите по вкусу. Для остроты можно добавить стручок красного перца по вкусу. Закройте плов с грибами плотно крышкой, чтобы не выходил пар и готовьте на среднем огне 25 минут.',
      img: '/photo/plov4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 2,
      body: 'Готовому плову с грибами дайте отдохнуть. Уберите сковороду с плиты, накройте полотенцем и дайте постоять 5 минут. Затем перемешайте, выложите на большую тарелку или порционно, посыпьте зеленью по желанию и подайте на стол.',
      img: '/photo/plov5.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 3,
      body: 'Подготовить ингредиенты салата. Куриное филе промыть, нарезать небольшими брусочками, посолить, поперчить и обжарить на оливковом масле, понемногу добавляя белое вино.',
      img: '/photo/cesar1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 3,
      body: 'Для соуса салата перемешать все ингредиенты в блендере. Обратите внимание: рецепт соуса дан на 10 порций. На 2 порции салата требуется 6 ст. л. соуса. Готовый соус можно хранить в холодильнике около недели при температуре 4С.',
      img: '/photo/cesar2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 3,
      body: 'Листья салата промыть проточной водой, затем тщательно обсушить бумажными полотенцами. Порвать на небольшие кусочки и заправить приготовленным ранее соусом.',
      img: '/photo/cesar3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 3,
      body: 'Добавить кусочки курицы и перемешать. Выложить на тарелку или в салатник. Помидоры вымыть и разрезать на половинки. Выложить на салат вместе с гренками и сыром.',
      img: '/photo/cesar4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 4,
      body: 'Подготовьте все ингредиенты для свекольника. Прежде всего, очистите и вымойте свеклу. Натрите на крупной терке и сложите в сотейник. Залейте водой, поставьте на сильный огонь и доведите до кипения.',
      img: '/photo/svek1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 4,
      body: 'Добавьте яблочный уксус и сахар, перемешайте. Тушите свеклу на слабом огне, прикрыв сотейник крышкой, 30 минут. Дайте остыть и уберите в холодильник до подачи.',
      img: '/photo/svek2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 4,
      body: 'Пока готовится свекла, картофель вымойте щеткой и отварите в мундире (20 минут). Дайте полностью остыть и очистите. Яйца сварите вкрутую (10 минут) и охладите проточной водой.',
      img: '/photo/svek3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 4,
      body: 'Свежие огурцы для свекольника вымойте и нарежьте маленькими кубиками. Так же нарежьте вареную колбасу и картофель. Сложите все в одну большую миску. Яйца очистите и нарежьте дольками.',
      img: '/photo/svek4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 4,
      body: 'Зеленый лук и укроп для свекольника тщательно промойте и обсушите, разложив на бумажном полотенце. Мелко нарежьте и переложите в миску к огурцам, колбасе и картофелю.',
      img: '/photo/svek5.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 4,
      body: 'Добавьте сметану, посолите и поперчите. Достаньте из холодильника тушеную свеклу. Добавьте в миску с ингредиентами вместе с жидкостью. Тщательно перемешайте. Разлейте свекольник по тарелкам, в каждую добавьте нарезанные яйца.',
      img: '/photo/svek6.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 5,
      body: 'Клубнику для конфитюра тщательно переберите, удаляя поврежденные ягоды. Промойте проточной водой и обсушите, разложив в один слой на бумажном полотенце.',
      img: '/photo/klub1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 5,
      body: 'Поставьте емкость с клубничным пюре с сахаром на средний огонь. Добавьте сок и цедру лимона. Помешивая, доведите до кипения. Варите 10 минут на слабом огне, периодически снимая пену.',
      img: '/photo/klub2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 5,
      body: 'Добавьте сметану, посолите и поперчите. Достаньте из холодильника тушеную свеклу. Добавьте в миску с ингредиентами вместе с жидкостью. Тщательно перемешайте. Разлейте свекольник по тарелкам, в каждую добавьте нарезанные яйца.',
      img: '/photo/klub3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 5,
      body: 'Добавьте агар-агар и перемешайте венчиком. Варите на слабом огне 8 минут и сразу же разлейте по сухим стерилизованным банкам. Закатайте конфитюр крышками и переверните на сложенное вдвое полотенце. Дайте полностью остыть.',
      img: '/photo/klub4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 6,
      body: 'Натрите мясо солью и перцем, заверните в пленку и оставьте при комнатной температуре на 2 ч.',
      img: '/photo/rost1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 6,
      body: 'Разогрейте духовку до 250°С. Обвяжите мясо кулинарным шпагатом. Разогрейте сковороду с оливковым маслом и обжарьте мясо до румяной корочки со всех сторон.',
      img: '/photo/rost2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 6,
      body: 'Заверните ростбиф в фольгу и положите на решетку. Поставьте в духовку и сразу уменьшите температуру до 160°С. Запекайте мясо из расчета 30-40 мин. на каждый килограмм веса в зависимости от желаемой степени готовности. В конце проверьте температуру внутри куска при помощи термометра. Идеальный ростбиф - 62°С. Готовый ростбиф оставьте в фольге на 10 мин. Нарежьте мясо тонкими ломтиками и подавайте к столу.',
      img: '/photo/rost3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 7,
      body: 'Приготовить чесночное масло. Чеснок мелко порубить и добавить в мягкое сливочное масло, хорошо перемешать. Убрать в холодильник.',

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 7,
      body: 'Лук нарезать соломкой, шампиньоны – средним ломтиком, вырезку – брусочком.',

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 7,
      body: 'На раскаленной сковороде обжарить в растительном масле лук, грибы и мясо. Добавить специи, сливки, сметану, чесночное масло. Выпарить до загустения соуса.',

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 7,
      body: 'Картофель в кожуре разрезать на дольки и обжарить во фритюре. Положить картофель на блюдо, в центр выложить соус. Украсить блюдо соленьями, зеленью и луком фри.',

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 8,
      body: 'Свинину для гуляша вымойте и хорошо обсушите. Нарежьте кубиками со стороной 3 см. Репчатый лук очистите и мелко нарежьте. Зубчики чеснока очистите и порубите ножом.',
      img: '/photo/gulash1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 8,
      body: 'Стручки сладкого перца для гуляша вымойте. Разрежьте вдоль на половинки, удалите семена и перегородки. Мякоть перца нарежьте небольшими квадратиками или некрупными ломтиками произвольной формы.',
      img: '/photo/gulash2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 8,
      body: 'В большой сковороде нагрейте растительное масло. Положите лук с чесноком и, помешивая, подрумяньте на среднем огне до золотистого цвета в течение 5 минут. Добавьте сладкий перец, свинину и перемешайте. Жарьте на среднем огне 10 минут.',
      img: '/photo/gulash3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 8,
      body: 'Приготовьте подливку. В небольшой миске соедините томатную пасту и сметану. Помешивая венчиком, постепенно разведите питьевой водой. Посолите и поперчите по вкусу.',
      img: '/photo/gulash4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 8,
      body: 'Огонь под сковородой с гуляшом уменьшите до слабого. Влейте подливку и доведите до кипения. Тушите гуляш из свинины на слабом огне под неплотно закрытой крышкой 40 минут.',
      img: '/photo/gulash5.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 8,
      body: 'Осторожно, чтобы не обжечься, попробуйте подливку из сковороды и, если это необходимо, посолите еще немного. На гарнир можно предложить картофельное пюре или отварной рис.',
      img: '/photo/gulash6.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 9,
      body: 'Картофель и морковь необязательно варить. Овощи будут вкуснее, если их приготовить на пару или запечь в духовке. Если готовым овощам «в мундире» дать постоять 8 ч, то потом их будет легче нарезать красивыми ровными кубиками.',
      img: '/photo/ol1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 9,
      body: 'Огурцы – варианты разнятся от соленых и маринованных до свежих. Причем некоторые используют маринованные и свежие вместе. Одни настаивают на том, чтобы огурцы полностью очистить от кожуры, а другие наоборот, что удалять нужно внутреннюю часть с семенами.',
      img: '/photo/ol5.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 9,
      body: 'Репчатый лук можно замариновать в яблочном или винном уксусе или заменить зеленым.',
      img: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 9,
      body: 'Чтобы добавить салату свежести, кладут яблоко, реже грушу.',
      img: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Steps', [{
      recipe_id: 9,
      body: 'Если заменить консервированный горошек на отваренный свежемороженый, салат будет красивее.',
      img: '/photo/ol2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Steps', null, {});
  },
};
