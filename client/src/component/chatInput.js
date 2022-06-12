import React from "react";
import { ReactComponent as Send } from "../assets/send.svg";

const ChatInput=()=>{
    return (
        <>
        <div className="h-[10vh] px-6 relative">
            <input className="outline-none text-slate-400 bg-slate-600 rounded-md w-full h-[7vh] px-6" type="text" placeholder="Message" />
            <Send className="h-[4.5vh] absolute top-2 right-9 cursor-pointer hover:fill-blue-900 transition duration-300"/>
        </div>
        </>
    )
}


export default ChatInput;