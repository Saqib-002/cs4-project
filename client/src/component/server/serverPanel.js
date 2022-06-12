import React from "react";

import ServerIcon from "./serverIcon";
import ServerAddIcon from "./serverAddIcon";

const ServerPanel=()=>{
    return (
        <>
        <div className="h-[100vh] w-[6vw] bg-slate-900 flex flex-col items-center py-1 box-shadow-custom-2">
            <ServerIcon/>
            <hr className="bg-slate-900 fill-black h-[2px] w-[40%]"/>
            <ServerIcon/>
            <ServerAddIcon/>
        </div>
        </>
    )
}


export default ServerPanel;