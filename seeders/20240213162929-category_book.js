'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('category_books', [
      {
        book_id: 1,
        category_id: 1
      },
      {
        book_id: 2,
        category_id: 1
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('category_books', null, {});

  }
};
