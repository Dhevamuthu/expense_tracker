// *app.get('/', function (req, res) {
//     res.json({
//       name: "Santhosh",
//     });
//   });*/
//   //const static= express.static("static");
//   //app.use("/",static); for get

//   **
//  * host: 127.0.0.1
//  * port:3001
//  * path: /hi
//  * ?key=value
//  */
// /*app.post("/hi",(req,res)=>{
  
//   console.log(req.query); //it is used to access the data when get is given in api
//   //console.log(req.body); // for post api, we need to use this to access data for form details
//   res.json({
//     name: req.query.name,
//     Description:req.query.description,
//     Date: req.query.date,
//     Amount: req.query.amount,
//   });
// });*/

// *const author = new Author({
//     name:Math.random().toString(),
//     email:Math.random().toString(),
//   })
//   author.save().then(()=>console.log("Author Created"))*/
  
//   app.get("/hi",(req,res)=>{
//     console.log(req.query);
//     res.json(req.query);
//   })
  
//   /*app.post("/authors",(req,res)=>{
//     try{
//       const author = new Author({
//         name:Math.random().toString(),
//         email:Math.random().toString(),
//       })
//       author.save();
//       res.json(author);
//     }
//     catch(error){
//       console.log("error in fetching the data");
//     }
//   })*/
  
  
//   // to fetch by id using post method is given below.but it can be implemented using get method also
  
//   /*app.post("/authors/:id",async(req,res)=>{
//     const{id}= req.params;
//     const author = await Author.findById(id);
  
//     if(!author)
//     {
//       res.status(404).json({
//         error:"not found",
//       });
//       return;
//     }
//     await author.save();
//     res.json(author);
//   });*/
  
  
//   //getting from the user and storing in db
//   app.post("/authors", (req, res) => {
//     const { name, email } = req.body;
//     const author = new Author({
//       name,
//       email,
//     });
  
//     author.save()
//       .then((data) => res.status(200).json(data))
//       .catch((error) => res.json({
//         error: error.message
//       }));
//   });
//   // to fetch the details of user if available else error
//   app.post("/authors/:id", async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       // Find the author by id
//       const author = await Author.findById(id);
  
//       if (!author) {
//         return res.status(404).json({ error: "Author not found" });
//       }
  
//       // Update the name if provided in the request body
//       if (req.body.name) {
//         author.name = req.body.name;
//         author.email = req.body.email;
//       }
  
//       // Save the updated author to the database
//       await author.save();
  
//       res.json(author);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Failed to update author" });
//     }
//   });
  
//   //fetch by id using get
//   app.get("/authors/:id",async(req,res)=>{
//     const{id}= req.params;
//     const author = await Author.findById(id);
//     res.json(author);
//   });
  
//   //to fetch all authors
//   app.get("/authors",async(req,res)=>{
//     const authors= await Author.find({})
//     res.json(authors);
//   })
  
//   app.get("/todos",async(req,res)=>{
//     /* const todos= fetch("https://jsonplaceholder.typicode.com/todos/1")
//      .then((response)=> response.json())
//      .then((json)=>json);*/
//      try{
//      const response= await fetch("https://jsonplaceholder.typicode.com/toos")
//      const todos= await(response.json())
//     res.json(todos);
//      }
//      catch(error)
//      {
//        res.status(503).json({
//          error: "API call failed",
//        })
//      }
//    });
//    app.get("/todos/:id", async(req,res)=>{
//      const id= req.params;
//      res.json({id});
//    });
   
//    app.get("*",(req,res)=>{
//      res.json({});
//    });
   