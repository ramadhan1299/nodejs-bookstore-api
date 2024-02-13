'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book_order.belongsTo(models.order, {
        foreignKey: 'order_id',
        as: 'order'
      })

      book_order.belongsTo(models.book, {
        foreignKey: 'book_id',
        as: 'book'
      })
    }
  }
  book_order.init({
    book_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'book_order',
    timestamps: true,
  });
  return book_order;
};