const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    case_id: String,
    width: Number,
    height: Number
});

// Image becomes images
module.exports = mongoose.model('image', imageSchema);
