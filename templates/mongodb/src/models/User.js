import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true, //This will ensure that the email is unique in our database collection.
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type: String, 
        required: true
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema)

export default User