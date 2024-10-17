import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from "./Button"; // Your custom button component

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // mobile view below 768px
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', color: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: "7%" }, height: "75px" }}>
        {/* Logo on the left side */}
        <Typography variant="h6" component="div">
          Skyway Holidays
        </Typography>

        {isMobile ? (
          <>
            {/* Buttons in the center on mobile view */}
            <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 2 }}>
              <Button addClass="bg-white/30 text-black border border-black" href='/singup'>Sign Up</Button>
              <Button addClass="" href='/login'>Login</Button>
            </Box>

            {/* Burger menu icon on the right end */}
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
              <MenuItem onClick={handleMenuClose}><a href="#">Home</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/rooms">Rooms</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/about">About</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/events">Events</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/reservation">Reservation</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/contact">Contact</a></MenuItem>
            </Menu>
          </>
        ) : (
          // For desktop view
          <Box sx={{ display: 'flex', gap: 4 }}>
            <a href="#">Home</a>
            <a href="/rooms">Rooms</a>
            <a href="/about">About</a>
            <a href="/events">Events</a>
            <a href="/reservation">Reservation</a>
            <a href="/contact">Contact</a>
          </Box>
        )}

        {!isMobile && (
          // Buttons on desktop view
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button addClass="bg-white/30 text-black border border-black" href='/singup'>Sign Up</Button>
            <Button addClass="" href='/login'>Login</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
