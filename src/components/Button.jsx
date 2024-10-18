import React from "react";

const Button = ({ addClass = "", onClick, children, sx = {} }) => {
  // Define a mapping for different button styles
  const buttonStyles = {
    secondaryBtn: "bg-white_2 text-black_1 hover:bg-maincolor_hover hover:outline hover:outline-1",
    searchBtn: "!rounded-[280px] flex justify-start items-center text-white text-xl !px-11 bg-primary text-maincolor hover:bg-hovercolor",
  };

  // Select the appropriate class based on `addClass`, or fallback to default
  const classes = buttonStyles[addClass] || "bg-green_1 text-white_1 hover:bg-green_2";

  return (
    <button 
      className={`px-5 py-2 rounded-3xl ${classes}`} 
      onClick={onClick} 
      style={sx}
    >
      {children}
    </button>
  );
};

export default Button;
