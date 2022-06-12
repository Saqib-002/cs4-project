import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const ServerIcon=()=>{
    return (
        <div className="relative my-2">
            <div className="bg-slate-600 w-[4vw] h-[4vw] flex justify-center items-center rounded-[100%] cursor-pointer hover:rounded-2xl hover:bg-indigo-500 transition-all duration-200 peer">
                <Logo className="w-[2.5vw] fill-white"/>
            </div>
            <div className="peer-hover:left-[-19px] transition-all duration-200 rounded-[4px] bg-white w-3 h-[3.5vw] absolute top-[2px] left-[-25px]"></div>
        </div>
    )
}


export default ServerIcon;