'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('customers', [
      {
        name: 'Ramadhan',
        address: 'Bekasi',
        email: 'danramadhan0@gmail.com'
      },
      {
        name: 'Arkana',
        address: 'Jakarta',
        email: 'arkanakafa290@gmail.com'
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('customers', null, {});

  }
};
