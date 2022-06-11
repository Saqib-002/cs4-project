const express=require("express");
const {
    loginUser,
    registerUser
}=require("./user.controller")
const userRouter=express.Router();

userRouter.post("/sign-in",loginUser);
userRouter.post("/register",registerUser);



module.exports=userRouter;