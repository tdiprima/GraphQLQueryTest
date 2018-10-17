// TD: MongoDB Tutorial #4
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    case_id: String,
    width: Number,
    height: Number
});

// TD: image becomes images
module.exports = mongoose.model('image', imageSchema);
