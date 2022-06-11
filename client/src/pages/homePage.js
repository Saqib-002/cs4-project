import React from "react";
import ServerPanel from "../component/serverPanel";
import ChannelPanel from "../component/channelPanel";
import ChatPanel from "../component/chatpanel";
import MemberPanel from "../component/memberPanel";

const HomePage=()=>{
    return (
        <div className="h-[100vh] flex bg-slate-500 p-0">
            <ServerPanel/>
            <ChannelPanel/>
            <ChatPanel/>
            <MemberPanel/>
        </div>
    )
}


export default HomePage;