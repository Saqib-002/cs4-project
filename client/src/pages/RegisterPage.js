import React from "react";
import { Link } from "react-router-dom";
import Input from "../component/Input";
import CustomButton from "../component/customButton";
import { useState } from "react";
import {ReactComponent as EmailLogo} from "../assets/email.svg"
import {ReactComponent as PassShowLogo} from "../assets/eye-password-show.svg"
import {ReactComponent as PassHideLogo} from "../assets/eye-password-hide.svg"
import {ReactComponent as UserNameLogo} from "../assets/username.svg"



const RegisterPage=()=>{
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
        }else if(name==="userName"){
            setUserName(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [userName,setUserName]=useState("");
    const [month,setMonth]=useState("");
    const [day,setDay]=useState("");
    const [year,setYear]=useState("");
    const onChangeMonth=(e)=>{
        setMonth(e.target.value);
    }
    const onChangeDay=(e)=>{
        setDay(e.target.value);
    }
    const onChangeYear=(e)=>{
        setYear(e.target.value);
    }
    const no_of_days = [];
    let lim=31;
    if(month==="FEB"){
        lim=29
    }else if(month==="JAN"||month==="MAR"||month==="MAY"||month==="AUG"||month==="JUL"||month==="OCT"||month==="DEC"){
        lim=31
    }else{
        lim=30
    }
    for (let i=1;i<=lim;i++) {
        
        no_of_days.push(<option key={i} value={i}>{i}</option>);
    }
    const no_of_years=[]
    for (let i=1990;i<=2050;i++) {
        no_of_years.push(<option key={i} value={i}>{i}</option>);
    }
    return(
    <>
        <div className="h-[87vh] flex justify-center flex-col items-center text-white bg-blue-300 ">
            {/* register div */}
            <div className="bg-transparent rounded-xl border-4 bg-blue-500 border-blue-700 h-[80vh] w-[50vw] flex justify-center flex-col items-center box-shadow-custom">
                <h1 className="font-bold text-2xl">Create an account</h1>
                <Input label={"Email"} logo1={<EmailLogo className="h-6 absolute top-2 left-[27vw] text-white fill-white"/>} type="email" name="email" handleChange={handleChange} value={email}/>
                <Input label={"Username"} logo1={<UserNameLogo className="h-6 absolute top-2 left-[27vw] text-white fill-white"/>} type="text" name="userName" handleChange={handleChange} value={userName}/>
                
                <div className="dob flex justify-center items-end text-black">
                    <span className="text-white text-xl font-semibold my-3">DOB</span>
                    <div className="flex flex-col">
                        <span className="mx-2 text-white">Month</span>
                        <select className="cursor-pointer text-slate-700 mx-2 my-2 bg-blue-200 text-2xl outline-none rounded-sm" name="" onChange={onChangeMonth} value={month} id="months">
                            <option value="JAN">January</option>
                            <option value="FEB">February</option>
                            <option value="MAR">March</option>
                            <option value="APR">April</option>
                            <option value="APR">May</option>
                            <option value="JUN">June</option>
                            <option value="JUL">July</option>
                            <option value="AUG">August</option>
                            <option value="SEP">September</option>
                            <option value="OCT">October</option>
                            <option value="NOV">November</option>
                            <option value="DEC">December</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <span className="mx-2 text-white">Day</span>
                        <select name="" className="cursor-pointer text-slate-700 mx-2 my-2 text-2xl bg-blue-200 outline-none rounded-sm" value={day} onChange={onChangeDay} id="day">
                            {no_of_days}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <span className="mx-2 text-white">Year</span>
                        <select name="" className="cursor-pointer mx-2 text-slate-700 my-2 text-2xl bg-blue-200 outline-none rounded-sm" value={year} onChange={onChangeYear} id="day">
                            {no_of_years}
                        </select>
                    </div>
                </div>
                <Input label={"Password"} logo1={<PassShowLogo onClick={togglePassIcon} className="h-6 absolute top-2 left-[27vw] text-white fill-white cursor-pointer"/>} logo2={<PassHideLogo onClick={togglePassIcon} className="h-6 absolute top-2 left-[27vw] text-white fill-white cursor-pointer"/>} type="password" name="password" handleChange={handleChange} value={password}/>
                <div className="w-96">
                    <CustomButton>Register</CustomButton>
                </div>
                <div className="flex w-96 my-2">
                    <span>Already have an account?</span>
                    <Link to="/register">
                        <span className="mx-4 underline text-slate-300 cursor-pointer hover:text-white">Log In</span>
                    </Link>
                </div>
            </div>
        </div>
    </>
)}

export default RegisterPage;