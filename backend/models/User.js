
const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
  name:{type:String,required:true,trim: true},
  email:{type:String,required:true,unique:true,lowercase:true,trim: true},
  password:{type:String,required:true,minlenght:6},
  role:{type:String,enum:["user","admin"],default:"user"},
  profilePhoto:{type:String,default:""}
},{ timestamps: true });

module.exports=mongoose.model("User",UserSchema);