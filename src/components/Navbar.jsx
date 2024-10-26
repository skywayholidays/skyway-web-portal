import { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import logo from '../assets/images/logo.png';

const Navbar = ({ isAuthRoute }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ background: 'white', boxShadow: 'none', color: 'black' }}>
      <Toolbar className="py-1" sx={{ justifyContent: 'space-between', px: { xs: 2, md: "7%" }, height: "auto" }}>
        <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Skyway Holidays Logo" style={{ height: '80px', width: 'auto' }} />
        </Box>

        {isMobile ? (
          <>
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
              <MenuItem onClick={handleMenuClose}><a href="/about">About</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/reservation">Internationals</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/contact">Contact</a></MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 4 }} className="text-xl">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/reservation">Internationals</a>
            <a href="/contact">Contact</a>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
