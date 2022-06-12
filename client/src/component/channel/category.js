import React from "react";
import Channel from "./channel";

const Category=()=>{
    return (
            <details className="text-slate-400 cursor-pointer px-1 my-3 mx-2 hover:text-white group">
                <summary >category_name</summary>
                <div className="mx-4 my-2 group-hover:text-slate-400">
                    <Channel/>
                </div>
            </details>
    )
}


export default Category;