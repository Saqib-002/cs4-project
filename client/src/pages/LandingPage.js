import React from "react";
import { Link } from "react-router-dom";
import CustomButton from '../component/customButton';


const LandingPage=()=>{
    return(
        <>
        <div className="h-[87vh] flex justify-center flex-col items-center text-white bg-blue-800">
            <h1 className="font-sans font-extrabold text-7xl text-white mb-8">IMAGINE A PLACE...</h1>
            <p className="w-[62vw] text-[20px] text-center">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <Link to="/register">
                <div className="my-6">
                    <CustomButton >Register</CustomButton>
                </div>
            </Link>
        </div>
        </>
    )
}



export default LandingPage;