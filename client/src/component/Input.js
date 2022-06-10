import React from 'react';


const Input=({handleChange,label,...otherProps})=>{
        return (
            <div className="my-3 relative">
                <div onClick={otherProps.togglepasssvg} className="passShow">
                    {otherProps.logo1}
                </div>
                <div onClick={otherProps.togglepasssvg} className="passHide invisible">
                    {otherProps.logo2}
                </div>
                <input className="outline-0 peer w-[30vw] bg-transparent px-3 py-2 rounded-[4px] border-2" onChange={handleChange} {...otherProps}/>
                {
                    label?(<label className={`${otherProps.value.length?`text-sm top-[-19px]`:`top-2`} absolute peer-focus:text-sm peer-focus:top-[-19px] left-2 transition-all duration-300`}>{label}</label>)
                    :null
                }
            </div>
        )
}

export default Input;