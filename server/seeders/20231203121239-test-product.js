const { faker } = require('@faker-js/faker');
('use strict');

const clothManufacturers = ['Measure', 'Zuhat', 'Gapanovich', 'Ermakovishna', 'Aswad', 'deenstreet']
const productName = ["Cloth", "Balaklava", "Yubka", "Platok"];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Products',
      [...Array(100)].map(()=>({
      name: productName[Math.floor(Math.random() * productName.length)],
      manufacturer: clothManufacturers[Math.floor(Math.random() * clothManufacturers.length)],
      size: "XL",
      price: faker.number.int(10000),
      description: faker.lorem.sentence(10),
      color: "black",
      images: JSON.stringify([Array(7)].map(()=>`${faker.image.urlLoremFlickr({ category: 'fashion' })}?random=${faker.number.int(30)}`)),
      in_stock: faker.number.int(10),
      vendor_code: faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date()
    })),
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
