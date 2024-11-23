import React from 'react';
import { Typography, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function HelpSection() {
  return (
    <Box className="p-8 rounded-lg shadow-lg w-80 mx-auto my-10 h-fit">
      <Typography variant="h4" component="h2" className="font-bold mb-4">
        Need Help?
      </Typography>
      
      <Typography className="text-gray-800 mb-6">
        We would be more than happy to help you. Our travel advisors are at your service (0730 - 2359 Hrs, Monday - Saturday).
      </Typography>
      
      <Box className="space-y-4 pt-4">
        <a 
          href="tel:+917275500634" 
          className="flex items-center gap-3 text-green-600 hover:text-green-700 transition-colors"
        >
          <PhoneIcon className="h-5 w-5" />
          <span>(+91) 95601 99201</span>
        </a>

        <a 
          href="mailto:info@traveterra.com"
          className="flex items-center gap-3 text-green-600 hover:text-green-700 transition-colors"
        >
          <EmailIcon className="h-5 w-5" />
          <span>skywayholidays106@gmail.com</span>
        </a>
      </Box>
    </Box>
  )
}

