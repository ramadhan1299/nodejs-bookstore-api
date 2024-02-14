'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book.hasMany(models.book_order, {
        foreignKey: 'book_id',
        as: 'book_orders'
      })

      book.hasMany(models.category_book, {
        foreignKey: 'book_id',
        as: 'category_books'
      })
    }
  }
  book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    isbn: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'book',
    timestamps: true,
  });
  return book;
};