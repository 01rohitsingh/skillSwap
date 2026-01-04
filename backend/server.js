const express=require("express");
const app=express();
const dotenv=require("dotenv")

dotenv.config();
app.get("/",(req,res)=>{
  res.send("SkillSwap Backend is running ")
});

// middleware
app.use(express.json());

PORT=process.env.PORT || 5000

app.use(express.json());
app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`)
});
