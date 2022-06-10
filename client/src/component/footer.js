import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../assets/logo.svg"
import {ReactComponent as Github} from "../assets/github.svg"
import {ReactComponent as Facebook} from "../assets/facebook.svg"


const Footer= () => {
    return (
        <>
            <footer className="text-gray-800 bg-blue-200 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to="/" className="flex title-font cursor-pointer font-medium items-center md:justify-start justify-center text-gray-800">
                        <Logo className="fill-blue-700  h-10 mx-5 drop-shadow-lg"/>
                        <span className="ml-3 text-xl">Discord</span>
                    </Link>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2020 Discord —
                        <Link to="/" className="text-gray-500 cursor-pointer ml-1" target="_blank" rel="noopener noreferrer">@saqibalishah</Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link to="/" className="text-gray-400 cursor-pointer">
                            <Facebook className="h-8"/>
                        </Link>
                        <Link to="/" className="ml-3 text-gray-400 cursor-pointer">
                            <Github className="h-8"/>
                        </Link>
                    </span>
                </div>
            </footer>
        </>
    )
}



export default Footer;