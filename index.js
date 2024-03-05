const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const dbConnect=require('./config/db.connect');
const authRouter=require("./routes/authRoutes");
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const PORT=process.env.PORT || 4000;
dbConnect();
// app.use('/',(req,res)=>{
//   res.send(`Server is running on the port ${PORT}`)
// });


app.use("/api/user",authRouter);
app.listen(PORT,()=>{
  console.log(`Server is running at port ${PORT}`)
});

