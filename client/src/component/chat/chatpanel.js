import React from "react";
import ChatBox from "./chatBox";
import ChatInput from "./chatInput";

const ChatPanel=()=>{
    return (
        <>
        <div className="h-[100vh] w-[56vw] bg-slate-500">
            <div className="h-[8vh] flex justify-between items-center">
                <div className="ml-4 text-white font-semibold text-xl">
                    <span className="text-2xl mr-2 text-slate-800">#</span>
                    serverName
                </div>
            </div>
            <hr className="bg-slate-900 fill-black h-[2px] w-[100%]"/>
            <ChatBox />
            <ChatInput />
        </div>
        </>
    )
}


export default ChatPanel;