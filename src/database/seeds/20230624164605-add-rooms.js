'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = []
    let amount = 10

    while(amount--) {
      data.push({
        name: `Room_${amount}`,
      })
    }

    await queryInterface.bulkInsert('Rooms', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};
