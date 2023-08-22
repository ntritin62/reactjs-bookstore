const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.status(200).json({
        message: 'Fetched products successfully',
        products: products,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then((product) => {
      if (!product) {
        const error = new Error('Could not find product.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Product fetched', product: product });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createProduct = (req, res, next) => {
  console.log(req.body);
  if (!req.file) {
    const error = new Error('No image provided.');
    error.statusCode = 422;
    throw error;
  }

  const imageUrl = req.file.path;
  const title = req.body.title;
  const author = req.body.author;
  const category = req.body.category;
  const oldprice = req.body.oldprice;
  const saleoff = req.body.saleoff;
  const newprice = req.body.price;
  const product = new Product({
    title: title,
    author: author,
    category: category,
    imageUrl: imageUrl,
    oldprice: oldprice,
    price: newprice,
    saleoff: saleoff,
  });
  product
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Post created successfully!',
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateProduct = (req, res, next) => {
  const productId = req.params.productId;
  const title = req.body.title;
  const author = req.body.author;
  const category = req.body.category;
  const oldprice = req.body.oldprice;
  const saleoff = req.body.saleoff;
  const newprice = req.body.price;
  let imageUrl = req.body.image;

  if (req.file) {
    imageUrl = req.file.path;
  }

  Product.findById(productId)
    .then((product) => {
      if (!product) {
        const error = new Error('Could not find product.');
        error.statusCode = 404;
        throw error;
      }
      if (!imageUrl) {
        imageUrl = product.imageUrl;
      }
      // if (imageUrl !== product.imageUrl) {
      //   clearImage(product.imageUrl);
      // }
      product.title = title;
      product.imageUrl = imageUrl;
      product.oldprice = oldprice;
      product.price = newprice;
      product.saleoff = saleoff;
      product.category = category;
      product.author = author;
      return product.save();
    })
    .then((result) => {
      res.status(200).json({ message: 'Product updated!', product: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then((product) => {
      if (!product) {
        const error = new Error('Could not find product.');
        error.statusCode = 404;
        throw error;
      }
      return Product.findByIdAndRemove(productId);
    })
    .then((result) => {
      res.status(200).json({ message: 'Deleted product.' });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

const clearImage = (filePath) => {
  filePath = path.join(__dirname, '..', filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
