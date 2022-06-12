import React from "react";
import Category from "./category";
import CurrentUser from "./currentUser";

const ChannelPanel=()=>{
    return (
        <>
        <div className="h-[100vh] w-[18vw] bg-slate-700">
            <div className="h-[8vh] border-b-2 border-slate-800 px-3 py-2 text-white box-shadow-custom-3">
                Server Name
            </div>
            <div className="h-[80vh]">
                <Category/>
                <Category/>
            </div>
            <div>
                <CurrentUser/>
            </div>
        </div>
        </>
    )
}


export default ChannelPanel;