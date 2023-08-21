const Order = require('../models/order');

exports.postOrder = (req, res, next) => {
  const products = req.body.products;
  const receiver = req.body.receiver;
  const userId = req.userId;

  const order = new Order({
    products: products,
    receiver: receiver,
    userId: userId,
  });
  return order
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
};
