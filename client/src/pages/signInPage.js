import React,{ useState } from "react";
import { Link } from "react-router-dom";
import Input from "../component/Input";
import CustomButton from "../component/customButton";
import {ReactComponent as EmailLogo} from "../assets/email.svg"
import {ReactComponent as PassShowLogo} from "../assets/eye-password-show.svg"
import {ReactComponent as PassHideLogo} from "../assets/eye-password-hide.svg"

import {postUserForLogin} from "../requests"
import {togglePassIcon} from "./utils.pages"


const SignInPage=(props)=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const getUser=async()=>{
        const user=await postUserForLogin(email,password);
        console.log(user);
        const dialogue=document.getElementById("dialogue"); 
        if(user[1]===200){
            dialogue.classList.add("text-green-700");
            dialogue.classList.add("bg-green-200");
            dialogue.classList.remove("text-red-700");
            dialogue.classList.remove("bg-red-200");
            dialogue.innerText="Successfully login"
            props.setIsSignedIn(true);
        }else{
            dialogue.classList.remove("text-green-700");
            dialogue.classList.remove("bg-green-200");
            dialogue.innerText="Invalid email or address"
            dialogue.classList.add("text-red-700");
            dialogue.classList.add("bg-red-200");
        }
        dialogue.classList.add("visible");
        dialogue.classList.remove("invisible");
        setTimeout(() => {
            dialogue.classList.add("invisible");
            dialogue.classList.remove("visible");
        }, 1000);
    }
    const toggle_PassIcon=(e)=>{
        togglePassIcon(e);
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
        <div className="h-[87vh] flex justify-center flex-col items-center text-white bg-blue-300 relative">
            {/* sign-in div */}
            <div className="bg-transparent rounded-xl border-4 bg-blue-500 border-blue-700 h-[60vh] w-[50vw] flex justify-center flex-col items-center box-shadow-custom">
                <span id="dialogue" className="w-full text-center invisible">Successfully login</span>
                <h1 className="font-bold text-2xl">Welcome back</h1>
                <span>We're so exited to see you again!</span>
                <Input label={"Email"} logo1={<EmailLogo className="h-6 absolute top-2 left-[27vw] text-white fill-white"/>} type="email" name="email" handleChange={handleChange} value={email}/>
                <Input label={"Password"} logo1={<PassShowLogo onClick={toggle_PassIcon} className="h-6 absolute top-2 left-[27vw] text-white fill-white cursor-pointer"/>} logo2={<PassHideLogo onClick={toggle_PassIcon} className="h-6 absolute top-2 left-[27vw] text-white fill-white cursor-pointer"/>} type="password" name="password" handleChange={handleChange} value={password}/>
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