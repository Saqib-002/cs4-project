import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

const MemberPanel=()=>{
    return (
        <>
        <div className="h-[100vh] w-[20vw] bg-slate-700">
            <div className="h-[8vh] flex justify-between items-center box-shadow-custom-3 border-b-2 border-slate-800">
                <div className="ml-4 text-white font-semibold text-xl">
                    Members
                </div>
            </div>
            <ul className="p-3 block overflow-auto h-[92vh] overflow-x-auto">
                <li className="flex my-2">
                    <Logo className="h-[6vh] mx-2 bg-indigo-500 ml-4 fill-white rounded-full p-[6px]"/>
                    <span className="text-slate-300">Username</span>
                </li>
                <li className="flex my-2">
                    <Logo className="h-[6vh] mx-2 bg-indigo-500 ml-4 fill-white rounded-full p-[6px]"/>
                    <span className="text-slate-300">Username</span>
                </li>
            </ul>
        </div>
        </>
    )
}


export default MemberPanel;