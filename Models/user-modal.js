const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
});
userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
        userId: this._id.toString(),
        email: all.email,
        isAdmin: this.isAdmin,
    },
    process.env.JWT_SECRET_KEY,
    {
    expiresIN: "30d",
    }
);


    }catch(error){
        console.error(error);
    }
 
};

const User = new mongoose.model("User", userSchema);
module.exports = User;