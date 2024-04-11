import User from "../models/User.js"
import bcrypt from "bcrypt"



const register = async(req,res)=>{
    // code to add new user
    const {name, email, password} = req.body

    if (!email || !password || !password) return res.status(404).json({"Error" : "Email and password are required"}) //Check if the email and password are provided
    try {
        
        await User.create({
            name,
            email,
            password: await bcrypt.hash(password,10) //Encrypt the user password
        })
        .then(()=>{
            console.log("User created successfully")
            res
            .status(201)
            .json({
                message: "User created successfully",
                user: {
                    name,
                    email
                }
            })
        })
        .catch((err)=>{
            //Return an error if the user is not created
            res
            .status(500)
            .json({"Error creating user" : err})
        })
    } catch (err) {
        //Return an error if the user is not created
        res
        .status(500)
        .json({"Error" : err})
    }
}




const login = async(req,res)=>{
    // code to login a user

    const{email, password} = req.body

    if (!email || !password) return res.status(404).json({"Error" : "Email and password are required"}) //Check if the email and password are provided

    try {
        const user = await User.findOne({ email: email }); // Search for the user in the database by email
    
        if (user) {
            // If the user is found, compare the password
            if (await bcrypt.compare(password, user.password)) {
                console.log("User logged in successfully");
                res.status(200).json({
                    message: "User logged in successfully",
                    user: {
                        name: user.name,
                        email: user.email
                    }
                });
            } else {
                res.status(401).json({ "Error": "Invalid email or password" });
            }
        } else {
            // If user is not found
            res.status(404).json({ "Error": "User not found" });
        }
    } catch (error) {
        res.status(500).json({ "Error": error });
    }
    
}


export {login,register}; 