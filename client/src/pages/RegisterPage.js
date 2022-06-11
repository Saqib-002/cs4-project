import React,{ useState } from "react";
import { Link } from "react-router-dom";
import Input from "../component/Input";
import CustomButton from "../component/customButton";
import {ReactComponent as EmailLogo} from "../assets/email.svg"
import {ReactComponent as PassShowLogo} from "../assets/eye-password-show.svg"
import {ReactComponent as PassHideLogo} from "../assets/eye-password-hide.svg"
import {ReactComponent as UserNameLogo} from "../assets/username.svg"
import {togglePassIcon} from "./utils.pages"
import { postUserForRegister } from "../requests";


const RegisterPage=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [userName,setUserName]=useState("");
    const [month,setMonth]=useState("");
    const [day,setDay]=useState("");
    const [year,setYear]=useState("");
    const regexforPassword=/(\w+\d+\W+){1}|(\w+\W+\d+){1}|(\d+\w+\W+){1}|(\d+\W+\w+){1}|(\W+\w+\d+){1}|(\W+\d+\w+){1}|(\d+\w+\W+){1}|(\d+\W+\w+){1}/;
    //1,2,3
    //1,3,2
    //2,1,3
    //2,3,1
    //3,1,2
    //3,2,1
    //2,1,3
    //2,3,1


    const postUser= async()=>{
        let dialoguebox=document.getElementById("dialogue");
        dialoguebox.classList.remove("hidden");
        dialoguebox.classList.add("bg-red-200");
        dialoguebox.classList.add("text-red-800");
        if(userName===""){
            dialoguebox.firstChild.innerText="Username can't be empty";
        }else if(email===""){
            dialoguebox.firstChild.innerText="Email field can't be empty";
        }else if(password===""){
            dialoguebox.firstChild.innerText="Password can't be empty";
        }else if(password.length<8){
            dialoguebox.firstChild.innerText="Password should be atleat length of 8 characters";
        }else if(!regexforPassword.test(password)){
            dialoguebox.firstChild.innerText="Password should contain atleast one number,letter and special character";
        }
        else{
            const response= await postUserForRegister(email,password,userName,day,month,year);
            console.log(response);
            if(response[1]===409&&response[0].error==="un_username"){
                dialoguebox.firstChild.innerText="Username already taken by someone!!!";
            }else if(response[1]===409&&response[0].error==="un_email"){
                dialoguebox.firstChild.innerText="Email is already in use!!!";
            }
            if(response[1]===201){
                dialoguebox.classList.remove("bg-red-200");
                dialoguebox.classList.remove("text-red-800");
                dialoguebox.classList.add("bg-green-200");
                dialoguebox.classList.add("text-green-800");
                dialoguebox.firstChild.innerText="Successfully Registered";
            }
        }
    }
    const toggle_PassIcon=(e)=>{
        
            togglePassIcon(e);
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
    const closeDialogue=()=>{
        document.getElementById("dialogue").classList.add('hidden');
    }
    return(
    <>
        <div className="h-[100vh] flex justify-center flex-col items-center text-white bg-blue-300 ">
            {/* register div */}
                <p id="dialogue" className="w-[99.5%]  rounded-lg h-16 flex items-center justify-between px-4 my-4 hidden">
                    <span>Successfully register</span> <span className="text-2xl mr-3 text-black cursor-pointer hover:text-red-600" onClick={closeDialogue}>X</span></p>
                <div></div>
            
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
                <Input label={"Password"} logo1={<PassShowLogo onClick={toggle_PassIcon} className="h-6 absolute top-2 left-[27vw] text-white fill-white cursor-pointer"/>} logo2={<PassHideLogo onClick={toggle_PassIcon} className="h-6 absolute top-2 left-[27vw] text-white fill-white cursor-pointer"/>} type="password" name="password" handleChange={handleChange} value={password}/>
                <div className="w-96">
                    <CustomButton onClick={postUser}>Register</CustomButton>
                </div>
                <div className="flex w-96 my-2">
                    <span>Already have an account?</span>
                    <Link to="/sign-in">
                        <span className="mx-4 underline text-slate-300 cursor-pointer hover:text-white">Log In</span>
                    </Link>
                </div>
            </div>
        </div>
    </>
)}

export default RegisterPage;