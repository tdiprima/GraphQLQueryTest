// This script defines a Mongoose schema for an object with three fields. 
// The object_type field is of type String
// The x and y fields are of type Number
// The model, named 'object', is then exported for use in other parts of the application.
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
