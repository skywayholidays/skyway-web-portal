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
  const [internationalAnchorEl, setInternationalAnchorEl] = useState(null);

  // Functions to handle main menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Functions to handle "Internationals" submenu
  const handleInternationalMenuOpen = (event) => {
    setInternationalAnchorEl(event.currentTarget);
  };
  const handleInternationalMenuClose = () => {
    setInternationalAnchorEl(null);
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
              <MenuItem onClick={handleInternationalMenuOpen}>Internationals</MenuItem>
              <MenuItem onClick={handleMenuClose}><a href="/contact">Contact</a></MenuItem>
            </Menu>
            {/* Submenu for Internationals */}
            <Menu
              anchorEl={internationalAnchorEl}
              open={Boolean(internationalAnchorEl)}
              onClose={handleInternationalMenuClose}
              sx={{ ml: 2 }}
            >
              <MenuItem onClick={handleInternationalMenuClose}><a href="/thailand">Thailand</a></MenuItem>
              <MenuItem onClick={handleInternationalMenuClose}><a href="/bali">Bali</a></MenuItem>
              <MenuItem onClick={handleInternationalMenuClose}><a href="/dubai">Dubai</a></MenuItem>
              <MenuItem onClick={handleInternationalMenuClose}><a href="/malaysia">Malaysia</a></MenuItem>
              <MenuItem onClick={handleInternationalMenuClose}><a href="/maldivs">Maldivs</a></MenuItem>
              <MenuItem onClick={handleInternationalMenuClose}><a href="/india">India</a></MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 4 }} className="text-xl">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <Box
              onMouseEnter={handleInternationalMenuOpen}
              onMouseLeave={handleInternationalMenuClose}
              sx={{ position: 'relative', cursor: 'pointer' }}
            >
              <a href="#" onClick={(e) => e.preventDefault()}>Internationals</a>
              <Menu
                anchorEl={internationalAnchorEl}
                open={Boolean(internationalAnchorEl)}
                onClose={handleInternationalMenuClose}
                MenuListProps={{ onMouseLeave: handleInternationalMenuClose }}
                sx={{ mt: 2 }}
              >
                <MenuItem onClick={handleInternationalMenuClose}><a href="/thailand">Thailand</a></MenuItem>
                <MenuItem onClick={handleInternationalMenuClose}><a href="/bali">Bali</a></MenuItem>
                <MenuItem onClick={handleInternationalMenuClose}><a href="/dubai">Dubai</a></MenuItem>
                <MenuItem onClick={handleInternationalMenuClose}><a href="/malaysia">Malaysia</a></MenuItem>
                <MenuItem onClick={handleInternationalMenuClose}><a href="/maldivs">Maldivs</a></MenuItem>
                <MenuItem onClick={handleInternationalMenuClose}><a href="/india">India</a></MenuItem>
              </Menu>
            </Box>
            <a href="/contact">Contact</a>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
