import React from "react";
import { Grid, Typography, Link, IconButton, Divider, List, ListItem, Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../assets/images/logo.png';
import footerimage from '../assets/images/footer1.jpg'

const Footr = () => {
  const importantLinks = [
    { href: "#", label: "Home" },
    { href: "/aboutus", label: "About Us" },
    { href: "#", label: "International" },
    { href: "/contact", label: "Contact Us" }
  ];

  const services = [
    { label: "Air Ticket" },
    { label: "Hotel Booking" },
    { label: "Holiday Packages" },
    { label: "Passport" },
    { label: "Forex" },
    { label: "Visa" },
  ];

  return (
    <div
      style={{
        width: '100vw',
        padding: '2rem 0',
        backgroundImage:`url(${footerimage})`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#555555' // Adjust text color for better visibility
      }}
    >
      <Container maxWidth="lg" className="backdrop-blur-sm bg-white/60 rounded-md" >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img src={logo} alt="Skyway Holidays Logo" style={{ width: '12rem' }} />
            <Typography variant="body2" style={{ marginTop: '1rem' }}>
              Skyway Holidays, a global travel organization, offers a full range of Travel Management Services in both Corporate & Leisure Travel, specializing in designing tailor-made luxury holidays and providing the best personalized services.
            </Typography>
            <div style={{ paddingTop: '1.5rem' }}>
              <IconButton component={Link} href="https://www.facebook.com/profile.php?id=61561315643620" target="_blank" rel="noopener noreferrer" size="small">
                <FacebookIcon sx={{ color: 'black' }} />
              </IconButton>
              <IconButton component={Link} href="https://www.linkedin.com/company/dortex-ai/" target="_blank" rel="noopener noreferrer" size="small">
                <LinkedInIcon sx={{ color: 'black' }} />
              </IconButton>
              <IconButton component={Link} href="https://www.instagram.com/dortex_ai/?hl=en" target="_blank" rel="noopener noreferrer" size="small">
                <InstagramIcon sx={{ color: 'black' }} />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold" className=" text-green_1">Important Links</Typography>
            <div style={{ marginTop: '1rem' }}>
              {importantLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color="inherit"
                  underline="none"
                  display="block"
                  sx={{ marginBottom: '0.5rem' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold" className=" text-green_1">Services</Typography>
            <List style={{ marginTop: '1rem', paddingLeft: '0' }}>
              {services.map((service, index) => (
                <ListItem key={index} style={{ padding: '0', margin: '0' }}>
                  <Typography color="inherit" style={{ flexGrow: 1, marginBottom: '0.5rem' }}>
                    {service.label}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" className=" text-green_1">Get in Touch</Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
              <LocationOnIcon sx={{marginRight: '0.5rem' }} className="text-green_1" />
              <Typography variant="body2">205/B-1, Plaza at 106, Sector-106, Gurgaon (122006) India</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <PhoneIcon sx={{ marginRight: '0.5rem' }} className="text-green_1"/>
              <Typography variant="body2">(+91) 95601 99201</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <EmailIcon sx={{marginRight: '0.5rem' }} className="text-green_1" />
              <Typography variant="body2">skywayholidays106@gmail.com</Typography>
            </div>
          </Grid>
        </Grid>
        <Divider style={{ margin: '2rem 0'}} className="bg-black_3" />
        <Typography variant="body2" align="center" fontWeight="medium">
          Copyright © 2024 Skyway Holidays, All Rights Reserved.
        </Typography>
      </Container>
    </div>
  );
}

export default Footr;
