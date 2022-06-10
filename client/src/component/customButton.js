import React from 'react';


const CustomButton = ({ children,...otherProps }) => (
  <button className={`bg-white text-black rounded-full px-2 py-1 h-8 w-full transition duration-300 ease-in-out hover:bg-slate-500 hover:text-white drop-shadow-2xl font-semibold hover:text-shadow ` } {...otherProps}>
    {children}
  </button>
);

export default CustomButton;