'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('books', [
        {
          title: 'Membuat aplikasi CRUD sederhana dengan Bootstrap, Nodejs express, MongoDB',
          author: 'Wahyu Illahi',
          isbn: '978-623-90494-9-2',
          price: 102000
        },
        {
          title: 'Cara Mudah Belajar Pemrograman Web dengan PHP',
          author: 'Mohammad Jepri',
          isbn: '978-602-02-1134-3',
          price: 97000
        }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('books', null, {});
     
  }
};
