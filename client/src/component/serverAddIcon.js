import React from "react";

const ServerAddIcon=()=>{
    return (
        <div className="relative">
            <div className="bg-slate-600 w-[4vw] h-[4vw] flex justify-center items-center  rounded-[100%] cursor-pointer hover:rounded-2xl hover:bg-green-700 transition-all duration-200 group">
                <span className="text-[4vw] group-hover:text-white text-green-600 relative top-[-5px]">&#43;</span>
            </div>
        </div>
    )
}


export default ServerAddIcon;