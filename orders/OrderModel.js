const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Vendor = require('../vendors/VendorModel.js');

const OrderSchema = mongoose.Schema({
  number: String,
  email: String,
  vendor: {
    type: ObjectId,
    ref: 'Vendor',
  },
});

module.exports = mongoose.model('Order', OrderSchema);
