import express from "express"
import "dotenv/config"
import cors from "cors"
import AuthRouter from "./routes/authRoutes.js"
import mongoose from "mongoose"


const app= express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//@desc   Authentication routes 
//@route  /api/auth/...
app.use("/api/auth", AuthRouter)



const PORT= process.env.PORT || 3000
// @desc   Connect to mongodb
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected to MongoDB")

    // @desc   Start the server after connecting to db
    app.listen(PORT,()=>{
        console.log("Server is running on http://localhost:"+ PORT)
    })
})
.catch((err)=>{
    console.log("Error connecting to MongoDB", err)
})
