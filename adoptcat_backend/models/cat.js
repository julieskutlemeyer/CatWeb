const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

//create schema for cat
const CatSchema = new Schema({
    name: String,
    age: Number,
    race: String,
    description: String
})

CatSchema.plugin(mongoosePaginate);
//create model for cat
const Cat = mongoose.model('cat', CatSchema);

module.exports = Cat;