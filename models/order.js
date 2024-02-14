'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.customer, {
        foreignKey: 'customer_id',
        as: 'customer'
      })

      order.hasMany(models.book_order, {
        foreignKey: 'order_id',
        as: 'book_orders'
      })
    }
  }
  order.init({
    order_date: DataTypes.DATE,
    total_price: DataTypes.FLOAT,
    customer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
    timestamps: true,
  });
  return order;
};