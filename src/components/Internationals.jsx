import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Tilt from 'react-parallax-tilt';
import { Thailand, Bali, India, Dubai, Malaysia, Maldivs } from "../assets/images";

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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 'lg',
            padding: '2rem'
        }}>
            <Typography variant="h3" component="h3" sx={{ marginBottom: '2rem', fontWeight: 'bold' }}>
                AWESOME INTERNATIONAL TOURS
            </Typography>
            <Grid container spacing={4} className="px-3 md:px-0">
                {Contaries.map((country, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={20} glareEnable={true} glareMaxOpacity={0.8} glareColor="lightblue" glarePosition="all">
                            <Paper
                                elevation={3}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    height: '100%', // Ensures the card takes full height
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '2px solid lightgray',
                                    position: 'relative',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    }
                                }}
                            >
                                <img src={country.image} alt={country.title} style={{ borderRadius: '8px', width: '100%', maxHeight: '250px', objectFit: 'cover' }} />
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', marginTop: '1rem', textAlign: 'center' }}>
                                    {country.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    {country.description}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="#22C55E"
                                    sx={{ marginTop: '1rem', cursor: 'pointer', textAlign: 'center' }}
                                    component="a"
                                    href={country.link}
                                >
                                    Show More ➔
                                </Typography>
                            </Paper>
                        </Tilt>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Internationals;
