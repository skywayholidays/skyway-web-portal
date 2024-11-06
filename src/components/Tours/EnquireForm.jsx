import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const EnquireForm = () => {
  return (
    <Box className="p-8 rounded-lg shadow-lg w-80 mx-auto my-10 h-fit">
      <Typography variant="h5" component="h2" className="text-center font-bold pb-6">
        ENQUIRE
      </Typography>
      
      <form className="flex flex-col gap-4">
        <TextField
          label="Name"
          required
          variant="outlined"
          size="small"
          className="bg-white"
        />
        
        <TextField
          label="Phone Number"
          required
          variant="outlined"
          size="small"
          className="bg-white"
        />
        
        <TextField
          label="dd-mm-yy"
          required
          variant="outlined"
          size="small"
          className="bg-white"
        />
        
        <Button
          variant="contained"
          type="submit"
          className="mt-4"
          sx={{
            backgroundColor: "#24AB70",
            "&:hover": {
              backgroundColor: "#1E995C", // Optional: adjust the hover color
            },
          }}
        >
          SUBMIT
        </Button>
      </form>
    </Box>
  );
};

export default EnquireForm;
