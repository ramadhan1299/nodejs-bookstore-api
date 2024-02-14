'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('orders', [
      {
        order_date: new Date(),
        total_price: 102000,
        customer_id: 1
      },
      {
        order_date: new Date(),
        total_price: 97000,
        customer_id: 2
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('orders', null, {});

  }
};
