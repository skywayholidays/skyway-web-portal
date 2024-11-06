import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Typography } from '@mui/material';

const CancellationTab = () => {
    return (
        <div className='max-w-md'>
            <h1 className="text-2xl font-bold mb-4">Cancellation Policy</h1>
            <p>Information about the cancellation policy you can ContactUs.</p>
            <div className=' flex flex-col py-4'>
            <p>We would be more than happy to help you. Our travel advisors are at your service (07:30 - 23:59 Hrs, Monday - Saturday).</p>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <PhoneIcon sx={{ marginRight: '0.5rem' }} className="text-green_1"/>
              <Typography variant="body2">(+91) 95601 99201</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <EmailIcon sx={{marginRight: '0.5rem' }} className="text-green_1" />
              <Typography variant="body2">skywayholidays106@gmail.com</Typography>
            </div>
            </div>
        </div>
    );
};

export default CancellationTab;
