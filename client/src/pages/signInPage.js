import React from "react";
import { Link } from "react-router-dom";
import Input from "../component/Input";
import CustomButton from "../component/customButton";
import { useState } from "react";
import {ReactComponent as EmailLogo} from "../assets/email.svg"
import {ReactComponent as PassShowLogo} from "../assets/eye-password-show.svg"
import {ReactComponent as PassHideLogo} from "../assets/eye-password-hide.svg"

import {getUserForLogin} from "../requests"


const SignInPage=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const getUser=async ()=>{
        const user=await getUserForLogin(email,password);
        console.log(user);
    }
    const togglePassIcon=(e)=>{
        const element=e.target.parentElement.parentElement;
        element.classList.add("invisible");
        element.classList.remove("visible");
        if(element.classList.contains("passShow")){
            const passElem=element.nextElementSibling.nextElementSibling;
            const elemNextSibling=element.nextElementSibling;
            elemNextSibling.classList.add("visible");
            elemNextSibling.classList.remove("invisible");
            passElem.type="text"
        }else{
            const elemPreviousSibling=element.previousElementSibling;
            const passElem=element.nextElementSibling;
            elemPreviousSibling.classList.add("visible");
            elemPreviousSibling.classList.remove("invisible");
            passElem.type="password"
        }
    }
    const handleChange=(e)=>{
        const {name}=e.target;
        if(name==="email"){
            setEmail(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }
    return(
    <>
        <div className="h-[87vh] flex justify-center flex-col items-center text-white bg-blue-300 ">
            {/* sign-in div */}
            <div className="bg-transparent rounded-xl border-4 bg-blue-500 border-blue-700 h-[60vh] w-[50vw] flex justify-center flex-col items-center box-shadow-custom">
                <h1 className="font-bold text-2xl">Welcome back</h1>
                <span>We're so exited to see you again!</span>
                <Input label={"Email"} logo1={<EmailLogo className="h-6 absolute top-2 left-[27vw] text-white fill-white"/>} type="email" name="email" handleChange={handleChange} value={email}/>
                <Input label={"Password"} logo1={<PassShowLogo onClick={togglePassIcon} className="h-6 absolute top-2 left-[27vw] text-white fill-white cursor-pointer"/>} logo2={<PassHideLogo onClick={togglePassIcon} className="h-6 absolute top-2 left-[27vw] text-white fill-white cursor-pointer"/>} type="password" name="password" handleChange={handleChange} value={password}/>
                <div className="w-96">
                    <CustomButton onClick={getUser}>Log In</CustomButton>
                </div>
                <div className="flex w-96 my-2">
                    <span>Need an account?</span>
                    <Link to="/register">
                        <span className="mx-4 underline text-slate-300 cursor-pointer hover:text-white">Register</span>
                    </Link>
                </div>
            </div>
        </div>
    </>
)}

export default SignInPage;