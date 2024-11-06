import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactInfoBar = () => {
  return (
    <div className="bg-green_1 text-white py-2 px-4 sticky top-0 z-50 hidden md:flex w-full justify-center items-center">
      <div className="flex  gap-4">
        <div className="flex items-center gap-2">
          <PhoneIcon  />
          <span>(+91) 95601 99201</span>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <EmailIcon />
          <span>skywayholidays106@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoBar;
