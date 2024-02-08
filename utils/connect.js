import mongoose from "mongoose";

export async function connectDB(){
    console.log("We are in the connecting DBs")
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to DB");
    }
    catch(error){
        console.log("Error while connecting to DB", error)    
    }
}