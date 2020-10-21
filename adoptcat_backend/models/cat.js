const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for cat
const CatSchema = new Schema({
  name: String,
  age: Number,
  race: String,
  description: String
})

//create model for cat
const Cat = mongoose.model('cat', CatSchema);

module.exports = Cat;
