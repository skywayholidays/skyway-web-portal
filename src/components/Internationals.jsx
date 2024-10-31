import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Tilt from 'react-parallax-tilt';
import { Thailand,Bali,India,Dubai,Malaysia,Maldivs } from "../assets/images";

const Contaries = [
    {
        image: Thailand,
        title: "Thailand – All Stunning Places",
        description: "6 Days, 5 Nights",
        link: "https://r3f-easyjob.vercel.app/"
    },
    {
        image: Bali,
        title: "Bali – All Stunning Places",
        description: "6 Days, 5 Nights",
        link: "/react"
    },
    {
        image: Dubai,
        title: "Dubai – All Stunning Places",
        description: "6 Days, 5 Nights",
        link: "/laravel"
    },
    {
        image: Maldivs,
        title: "Maldives – All Stunning Places",
        description: "6 Days, 5 Nights",
        link: "/laravel"
    },
    {
        image: Malaysia,
        title: "Malaysia – All Stunning Places",
        description: "6 Days, 5 Nights",
        link: "/laravel"
    },
    {
        image: India,
        title: "India – All Stunning Places",
        description: "6 Days, 5 Nights",
        link: "/laravel"
    }
];

const Internationals = () => {
    return (
        <Box sx={{
            textAlign: 'justify',
            color: '#12141d',
            display: { xs: 'flex', md: 'flex' }, // Responsive display property
            flexDirection: { xs: 'column', md: 'column' }, // Responsive flex direction
            alignItems: { xs: 'center', md: 'center' }, // Responsive align items
            maxWidth:'lg',
            padding:'2rem'
        }}>
            <Typography variant="h3" component="h3" sx={{ marginBottom: '2rem', fontWeight: 'bold' }}>
            AWESOME INTERNATIONAL TOURS
            </Typography>
            <Grid container spacing={6} className=" px-3 md:px-0">
                {Contaries.map((countary, index) => (
                    <Grid item xs={6} sm={6} md={4} key={index}>
                        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={20} glareEnable={true} glareMaxOpacity={0.8} glareColor="lightblue" glarePosition="all">
                            <Paper
                                elevation={3}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    height: { xs: '250px', md: '27rem' }, // Responsive height
                                    padding: {xs:'2.2rem',md:'1rem'},
                                    borderRadius: '8px',
                                    border: '2px solid lightgray',
                                    position: 'relative',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    }
                                }}
                            >
                                <img src={countary.image} alt={countary.title} style={{ borderRadius: '8px', width: '35rem', height: 'auto', maxHeight: '5050px' }} />
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', marginTop:{xs:'0.2rem',md:'1rem'}, textAlign: 'center',fontSize:{xs:'1rem',md:'1.3rem'} }}>
                                    {countary.title}
                                </Typography>
                                <Box sx={{ textAlign: 'center', marginTop: '1rem', display: { xs: 'none', md: 'block' } }}>
                                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: '0.5rem' }}>
                                        {countary.description}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="#22C55E"
                                        sx={{ marginTop: '1rem', cursor: 'pointer' }}
                                        component="a"
                                        href={countary.link}
                                    >
                                        Show More ➔
                                    </Typography>
                                </Box>
                            </Paper>
                        </Tilt>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Internationals;
