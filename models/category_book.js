'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      category_book.belongsTo(models.book, {
        foreignKey: 'book_id',
        as: 'books'
      })

      category_book.belongsTo(models.category, {
        foreignKey: 'category_id',
        as: 'category'
      })
    }
  }
  category_book.init({
    book_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'category_book',
    timestamps: true,
  });
  return category_book;
};