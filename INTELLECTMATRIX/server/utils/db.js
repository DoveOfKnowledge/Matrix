const mongoose = require("mongoose");


//const URI = "mongodb://127.0.0.1:27017/Intellect-admin";
//mongoose.connect(URI);

const URI = process.env.MONGODB_URI;

const connectDb = async () =>{
    try{
        await mongoose.connect(URI);
        console.log("connection Successful to DB");
    }catch(error){
        console.error("Databse Connection Failed");
        process.exit(0);
    }
};

module.exports = connectDb;