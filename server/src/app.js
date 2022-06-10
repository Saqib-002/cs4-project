const express=require("express");
const cors=require("cors");
const userRouter =require("./routes/user/user.router")
const app=express();

// Middlewares
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json())
app.use("/",userRouter)


module.exports=app