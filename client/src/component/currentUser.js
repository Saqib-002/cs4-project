import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Setting } from "../assets/setting.svg";

const CurrentUser=()=>{
    return (
        <>
        <div className="h-[9.9vh] bg-slate-800 flex justify-between items-center">
            <Logo className="h-[6vh] bg-indigo-500 ml-4 fill-white rounded-full p-[6px]"/>
            <div id="details" className="text-white cursor-pointer">
                <p>Username</p>
                <span className="text-slate-400">#1260</span>
            </div>
            <Setting className="mr-4 h-[6vh] fill-white cursor-pointer"/>
        </div>
        </>
    )
}


export default CurrentUser;