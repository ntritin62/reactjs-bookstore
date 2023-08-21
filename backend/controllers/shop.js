const Order = require('../models/order');

exports.postOrder = (req, res, next) => {
  const products = req.body.cart.products;
  const totalPrice = req.body.cart.totalPrice;
  const receiver = req.body.receiver;
  const userId = req.userId;

  const order = new Order({
    cart: {
      products: products,
      totalPrice: totalPrice,
    },
    receiver: receiver,
    userId: userId,
  });
  return order
    .save()
    .then((result) => {
      res.status(200).json({ message: 'Order posted' });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
