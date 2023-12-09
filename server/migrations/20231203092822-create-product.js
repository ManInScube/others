'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      manufacturer:{
        type: Sequelize.STRING
      },
      size:  {
        type: Sequelize.STRING
      },
      price:  {
        type: Sequelize.INTEGER
      },
      description:  {
        type: Sequelize.STRING(2048)
      },
      color:  {
        type: Sequelize.STRING
      },
      images:  {
        type: Sequelize.STRING(2048)
      },
      in_stock:  {
        type: Sequelize.INTEGER
      },
      vendor_code:  {
        type: Sequelize.STRING
      },

      new:  {
        type: Sequelize.BOOLEAN
      },

      bestseller:  {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};