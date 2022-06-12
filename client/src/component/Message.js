import React from "react";

const Message=()=>{
    return (
        <div className="h-auto rounded-md my-2 px-2 py-1 bg-slate-600 ">
            <div>
                <span className="mx-1 text-slate-300">Username</span>
                <span className="text-slate-300 text-xs">Date</span>
            </div>
            <div className="text-white mx-2">content</div>
        </div>
    )
}


export default Message;