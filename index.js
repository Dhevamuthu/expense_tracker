const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose= require('mongoose');
const Author= require('./models/Author.js');
const Expense= require('./models/Expenses.js');
const cors= require("cors")


app.use(bodyParser.json()); // for post
app.use(bodyParser.urlencoded({extended:true}));
const static= express.static("static");
app.use("/",static);
app.use(cors())


mongoose.connect('mongodb://localhost:27017/blogs').then(()=> console.log("Db connected")).catch((err)=>console.log("Db connection failed"));

//SCHEMA DEFINITION

console.log(Author.find({}).then((data)=> console.log(data)));
console.log(Expense.find({}).then((data)=>console.log(data)));


app.post("/expenses", (req, res) => {
  const { name, amount,expense,date } = req.body;
  const expenses = new Expense({
    name,
    amount,
  });
 expenses.save()
.then((data) => res.status(200).json(data))
.catch((error) => res.json({
  error: error.message
}));
})


app.listen(3001, () => {
  console.log("app running");
});

//expenses
//to fetch all expenses
app.get("/expenses",async(req,res)=>{
  const expense= await Expense.find({})
  res.json(expense);
})