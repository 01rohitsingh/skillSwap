const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose = require("mongoose");
const router=require("./routes/auth")
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
 .then(()=> console.log("MongoDB is connect"))
 .catch(err=>console.log(err.message))

const PORT=process.env.PORT || 5000

app.use(express.json());

app.use("/api/auth",router)

app.get("/",(req,res)=>{
  res.send("SkillSwap Backend is running ")
});


app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`)
});
