const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Using simple fields for first test
const objectSchema = new Schema({
    object_type: String,
    x: Number,
    y: Number
});

// object becomes objects
module.exports = mongoose.model('object', objectSchema);
