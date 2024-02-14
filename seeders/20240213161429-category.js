'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('categories', [{
      name: 'Teknologi',
      description: 'Kategori buku "Teknologi" mencakup berbagai jenis buku yang berkaitan dengan topik teknologi informasi, komputer, dan ilmu komputer secara umum.'
     }], {});
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});
    
  }
};
