import express from "express"
import dbConnect from "./config/db.js"
import userRouter from "./routes/userRoute.js"
const app=express()
const startServer=async()=>{
    await dbConnect();
    app.listen(8080,()=>{
    console.log("Server is runnning at http://localhost:8080")
})
}

startServer();
app.use(express.json())
app.use("/api/users",userRouter)
