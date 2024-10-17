// Button.js
import React from 'react';

const Button = ({ addClass, onClick, children }) => {
  return (
    <button
    className={`bg-primary px-5 py-2 rounded-3xl text-white ` + addClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
