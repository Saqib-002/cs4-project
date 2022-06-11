import React from "react";
import CustomButton from './customButton';
import { Link } from "react-router-dom";

import {ReactComponent as Logo} from "../assets/logo.svg"

const Header=(props)=>{
    const {isSignedIn,setIsSignedIn,setCurrentUser,currentUser}=props;
    const signOut=(e)=>{
        setIsSignedIn(false);
        setCurrentUser({});
    }
    return(
        <>
        <header className="bg-blue-600 sticky top-0 flex justify-between h-[13vh]  drop-shadow-lg items-center">
            {isSignedIn?
                (<Link to="/home">
                    <Logo className="fill-white  h-10 mx-10 my-5 drop-shadow-lg" />
                </Link>)
                :(<Link to="/">
                    <Logo className="fill-white  h-10 mx-10 my-5 drop-shadow-lg" />
                </Link>)
            }
            {isSignedIn?
                (<Link to="/home">
                    <span className="text-white font-bold text-2xl border-2 drop-shadow-lg border-white rounded-full p-3">Discord</span>
                </Link>)
                :(<Link to="/">
                    <span className="text-white font-bold text-2xl border-2 drop-shadow-lg border-white rounded-full p-3">Discord</span>
                </Link>)
            }
            {isSignedIn?
                (<Link to="/">
                    <div className="text-white mr-5">
                        <CustomButton onClick={signOut}>Sign Out</CustomButton>
                    </div>
                </Link>)
                :(<Link to="/sign-in">
                    <div className="text-white mr-5">
                        <CustomButton>Sign In</CustomButton>
                    </div>
                </Link>)
            }
        </header>
        </>
    )
}



export default Header;