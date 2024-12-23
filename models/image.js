// Using Mongoose to define a MongoDB model schema. 
// The schema is defined for an 'image' collection in the database. 
// Each document in this collection will contain 'case_id' as a String, 'width' and 'height' as Numbers. 
// The schema is then exported and can be used elsewhere in the project.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    case_id: String,
    width: Number,
    height: Number
});

// Image becomes images
module.exports = mongoose.model('image', imageSchema);
