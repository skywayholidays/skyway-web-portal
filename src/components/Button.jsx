import React from 'react';

const Button = ({ addClass, onClick, children, sx = {} }) => {
  return (
    <button
      className={`bg-primary text-maincolor px-5 py-2 rounded-3xl hover:bg-hovercolor ` + addClass}
      onClick={onClick}
      style={sx} 
    >
      {children}
    </button>
  );
};

export default Button;
