const express=require("express");
const {getUser}=require("./user.controller")
const userRouter=express.Router();

userRouter.get("/sign-in",getUser);



module.exports=userRouter;