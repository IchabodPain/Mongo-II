const express = require('express');

const Product = require('./ProductModel.js');

const productsRouter = express.Router();

// /products
productsRouter.post('/', function(req, res) {
  const productInfo = req.body;

  const product = new Product(productInfo);

  product
    .save()
    .then(savedProduct => {
      res.status(201).json(savedProduct);
    })
    .catch(err => {
      res.status(500).json({ msg: 'error creating product', error: err });
    }); // returns a promise
});

productsRouter.get('/', function(req, res) {
  Product.find({})
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      res.status(500).json({ msg: 'error getting the products', error: err });
    });
});

// /products/:id
productsRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  Product.findById(id)
    .then(products => {
      if (products) {
        res.status(200).json(products);
      } else {
        res.status(404).json({ msg: 'Not found' });
      }
    })
    .catch(err => {
      res.status(500).json({ msg: 'error getting the product', error: err });
    });
});

productsRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  Product.findByIdAndRemove(id)
    .then(product => {
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ msg: 'Not found' });
      }
    })
    .catch(err => {
      res.status(500).json({ msg: 'error deleting the products', error: err });
    });
});

productsRouter.put('/:id', function(req, res) {
  const { id } = req.params;
  const productData = req.body;

  Product.findByIdAndUpdate(id, productData)
    .then(product => {
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ msg: 'Not found' });
      }
    })
    .catch(err => {
      if (err.name === 'CastError') {
        res
          .status(400)
          .json({ msg: `The id: ${err.value} is not valid`, error: err });
      } else {
        res
          .status(500)
          .json({ msg: 'error deleting the products', error: err });
      }
    });
});

module.exports = productsRouter;
