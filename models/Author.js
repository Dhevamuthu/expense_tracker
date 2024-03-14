const mongoose =require('mongoose');
const Schema= mongoose.Schema;
const Author= new Schema({
    name:String,
    email:String,
});
const author= mongoose.model('Author',Author);

module.exports= author;