import mongosse from "mongoose"


const UserSchema = new mongosse.Schema({
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
})

const User = mongosse.model("User",UserSchema)

export default User