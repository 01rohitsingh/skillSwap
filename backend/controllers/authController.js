const User = require("../models/User")
const bcrypt = require("bcryptjs")

// registerUser
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All Fields required" });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ meaasge: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name: name.trim(), email: email.toLowercase.trim(), password: hashPassword });
    res.status(201).json({ _id: user._id, name: user.name, email: user.email, role: user.role });
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }

};


// loginUser
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({message:"All fields required"});
    }
    const user=await User.findOne({email});
    if(!user)
    {
      return res.status(400).json({message:"Invalid credentails"})
    }
    res.status(200).json({message:"Login validation passed"})
  }
  catch(err){
    res.status(400).json({message:err.message});
  }

}

module.exports = { registerUser , loginUser };
