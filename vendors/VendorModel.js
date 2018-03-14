const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  contact: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model('Vendor', VendorSchema);
