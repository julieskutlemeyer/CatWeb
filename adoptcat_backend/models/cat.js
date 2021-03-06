const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

//create schema for cat
const CatSchema = new Schema({
    id: Schema.Types.ObjectID,
    post: {
        date_published: Date,
        county_code: Number,
        county_name: String,
        street_name: String,
	likes: Number
    },
    owner: {
        first_name: String,
        last_name: String,
        email: String,
        phone: Number
    },
    cat: {
        cat_name: String,
        cat_gender: String,
        cat_birthdate: Date,
        cat_img_rel_adr: String,
	cat_race: String
    }

})

CatSchema.plugin(mongoosePaginate);
//create model for cat
const Cat = mongoose.model('cat', CatSchema);

module.exports = Cat;
