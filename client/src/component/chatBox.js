import React from "react";
import Message from "./Message";

const ChatBox=()=>{
    return (
            <div className="h-[80vh] mb-2 overflow-x-auto overflow-scroll w-full px-6 block py-8">
                <div className="flex flex-col">
                    <span className="text-white text-4xl text-center font-bold bg-slate-600 w-[10vh] rounded-full p-2"> #</span>
                    <span className="text-white text-4xl font-bold">Welcome to #gg!</span>
                    <span className="my-2">This is the start of #gg channel</span>
                    <hr />
                </div>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
    )
}


export default ChatBox;