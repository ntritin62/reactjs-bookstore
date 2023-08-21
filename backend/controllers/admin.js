const Order = require('../models/order');

exports.getOrders = (req, res, next) => {
  Order.find({ isDelivered: false })
    .sort({
      createdAt: 1,
    })
    .then((orders) => {
      res.status(200).json({
        message: 'Fetched orders successfully',
        orders: orders,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateOrder = (req, res, next) => {
  const orderId = req.params.orderId;
  Order.findById(orderId)
    .then((order) => {
      order.isDelivered = true;
      return order.save();
    })
    .then((result) => {
      res.status(200).json({
        message: 'Update order successfully',
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
