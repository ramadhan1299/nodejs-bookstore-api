'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('book_orders', [
      {
        book_id: 1,
        order_id: 1
      },
      {
        book_id: 2,
        order_id: 2
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('book_orders', null, {});

  }
};
