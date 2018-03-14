const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRouter = require('./products/productRoutes');

const Order = require('./orders/OrderModel.js');

const server = express();

server.use(helmet());
server.use(bodyParser.json());

server.get('/', function(req, res) {
  Order.find()
    .populate('vendor')
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.use('/products', productRouter);

mongoose
  .connect('mongodb://localhost/store')
  .then(cnx => {
    console.log(`connected to the ${cnx.connections[0].name} database`);
  })
  .catch(err => {
    console.log('error connect to mongo');
  });

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`running on port ${port}`));
