'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.NUMBER,
    description: DataTypes.STRING,
    color: DataTypes.STRING,
    images: DataTypes.STRING,
    in_stock: DataTypes.NUMBER,
    vendor_code: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};