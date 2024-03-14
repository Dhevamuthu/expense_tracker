const mongoose =require('mongoose');
const Schema= mongoose.Schema;

const Expense= new Schema({
    name:String,
    amount:Number,
    date:Date,
});
const expense= mongoose.model('Expense',Expense);

module.exports= expense;