
const User = require("../Models/user-modal");
const home = async (req, res) => {
    try {
      res.status(200).json({ msg: "Welcome to our home page" });
    } catch (error) {
      console.log(error);
    }
  };
  
  // *-------------------
  // Registration Logic
  // *-------------------
  const register = async (req, res) => {
    try {
        //console.log(req.body);
        const {name,email,password} = req.body;
        const userExist = await User.findOne({email: email });

        if(userExist){
          return res.status(400).json({msg: "email have"});

        }
        const userCreated = await User.create({name,email,password});
        




      res.status(200).json({ msg: userCreated, token: await userCreated.generateToken()});
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports = { home, register };