import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please input a username"],
        unique:[true, "Must be unique"],
    },
    email:{
        type: String,
        required: [true, "Please input a e-mail"],
        unique: [true, "Must be an unique e-mail"],
    },
    password:{
        type: String,
        required: [true, "Please input a password"]
    },
},
{
    timestamps: true
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User; 