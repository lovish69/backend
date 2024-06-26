const mongoose = require("mongoose");

const URI ="mongodb://localhost:27017/backend"
//mongoose.connect(URI);

const connectDb = async()=>{
    try{
        await mongoose.connect(URI);
        console.log("successful")

    }catch(error){
        console.error("failed");
        process.exit(0);
    }
};

module.exports = connectDb;
