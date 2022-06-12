import React from "react";
import ServerPanel from "../component/server/serverPanel";
import ChannelPanel from "../component/channel/channelPanel";
import ChatPanel from "../component/chat/chatpanel";
import MemberPanel from "../component/member/memberPanel";

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