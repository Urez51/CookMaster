module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      name: 'John',
      surname: 'Doe',
      email: 'John@mail.ru',
      password: 'adminadmin',
      role: true,
      img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADYCAMAAAC+/t3fAAAAG1BMVEX////p6enu7+77+/v09PTr6+vx8fH4+Pj19fVCfWJIAAACHElEQVR4nO3a246DIBSF4Qps9P2feLQWRUU0nWR0Of+XXlkvWNnISV8vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqiq4hXt+570ZoK001WzdUnu7p93wr1XE0Trm7hlw4KJluyw4KpluywYKIlO1EwnZLl81ZfsKNRsf9pzGvxTJH23TeZ+10wd3X7d+XBTgwd69s0gj22Ys8KdrL/ldmNg51+tAqxbl2x/Xa70PpeG2r3XN3+XctGz8Vb7ryyXdqyvkLB7N3yzcT7nshtszQRCWafn7XbG1ub/tYLlvL50p2+NMhoBLNarjmZ5sqj3A9HY28UrNiosmDfbgWEgmU7ZB+cmQtZz9w8ZkLB5g1ySM9Udkk32DxyuELzNyOjULD0x6I4U81Eg9kcwVuWwaY6Bs0Jum9zGuu7ZWW6z+VWM1jPl6+nAF6zK/bVSMFWD1N69LzmIjir2G4wzYo9uCumwWM1FafBshXtijavFBcBptktigZ76gQ9qC+p1ncLBZt3LYVF8GbfIhQsf7HXDduWLrugvG2pHe5uj41lgg2nULWjgfXZgEyw96HH/mGObsXGbE87fhu74nDeWzowHc+IhbviwRG3bLCxaI3FrD/6aE2hXGLBpnwudq33bRfd/is0wWDnEOzPEYxgN/HYYGF3JD/DbvyNX/Vz9CP3/fgNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+O9+AC4xDz003GcNAAAAAElFTkSuQmCC',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Users', [{
      name: 'Dima',
      surname: 'Gachi',
      email: 'Dima@mail.ru',
      password: 'gachigachi',
      role: false,
      img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADYCAMAAAC+/t3fAAAAG1BMVEX////p6enu7+77+/v09PTr6+vx8fH4+Pj19fVCfWJIAAACHElEQVR4nO3a246DIBSF4Qps9P2feLQWRUU0nWR0Of+XXlkvWNnISV8vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqiq4hXt+570ZoK001WzdUnu7p93wr1XE0Trm7hlw4KJluyw4KpluywYKIlO1EwnZLl81ZfsKNRsf9pzGvxTJH23TeZ+10wd3X7d+XBTgwd69s0gj22Ys8KdrL/ldmNg51+tAqxbl2x/Xa70PpeG2r3XN3+XctGz8Vb7ryyXdqyvkLB7N3yzcT7nshtszQRCWafn7XbG1ub/tYLlvL50p2+NMhoBLNarjmZ5sqj3A9HY28UrNiosmDfbgWEgmU7ZB+cmQtZz9w8ZkLB5g1ySM9Udkk32DxyuELzNyOjULD0x6I4U81Eg9kcwVuWwaY6Bs0Jum9zGuu7ZWW6z+VWM1jPl6+nAF6zK/bVSMFWD1N69LzmIjir2G4wzYo9uCumwWM1FafBshXtijavFBcBptktigZ76gQ9qC+p1ncLBZt3LYVF8GbfIhQsf7HXDduWLrugvG2pHe5uj41lgg2nULWjgfXZgEyw96HH/mGObsXGbE87fhu74nDeWzowHc+IhbviwRG3bLCxaI3FrD/6aE2hXGLBpnwudq33bRfd/is0wWDnEOzPEYxgN/HYYGF3JD/DbvyNX/Vz9CP3/fgNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+O9+AC4xDz003GcNAAAAAElFTkSuQmCC',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};