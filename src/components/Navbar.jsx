import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Button from "./Button"; // Your custom button component

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', color: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: "7%" }, height: "75px" }}>
        <Typography variant="h6" component="div">
          Skyway Holidays
        </Typography>

        {isMobile ? (
          <>
            <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 2 }}>
              <Button
                addClass="bg-white/30 border border-black"
                sx={{ color: 'black' }} // Ensures black text color
                onClick={handleSignupClick}
              >
                Sign Up
              </Button>
              <Button addClass="" onClick={handleLoginClick}>
                Login
              </Button>
            </Box>

            <IconButton
              edge="end"
              color="black"
              aria-label="menu"
              onClick={handleMenuOpen}
              size="large"
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}><a href="/">Home</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/rooms">Rooms</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/about">About</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/events">Events</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/reservation">Reservation</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/contact">Contact</a></MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 4 }}>
            <a href="/">Home</a>
            <a href="/rooms">Rooms</a>
            <a href="/about">About</a>
            <a href="/events">Events</a>
            <a href="/reservation">Reservation</a>
            <a href="/contact">Contact</a>
          </Box>
        )}

        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
            addClass="secondaryBtn"
              onClick={handleSignupClick}
            >
              Sign Up
            </Button>
            <Button addClass="primaryBtn" onClick={handleLoginClick}
            >
              Login
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
