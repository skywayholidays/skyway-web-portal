import React from 'react';
import {
    Container,
    Grid,
    TextField,
    Select,
    MenuItem,
    Typography,
    InputLabel,
    FormControl,
    TextareaAutosize,
    Box,
} from '@mui/material';
import Button from './Button';

const Reservationform = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <Grid container spacing={4}>
                {/* Form Section */}
                <Grid item xs={12} md={7}>
                    <Box component="form" sx={{ p: 5, border: '1px solid #e0e0e0', borderRadius: 2, boxShadow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Full Name" variant="outlined" required />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Mobile No" variant="outlined" required />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField fullWidth label="Email" type="email" variant="outlined" required />
                        </Grid>

                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Check In Date" type="date" variant="outlined" InputLabelProps={{ shrink: true }} required />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Check Out Date" type="date" variant="outlined" InputLabelProps={{ shrink: true }} required />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <FormControl fullWidth variant="outlined" required>
                                <InputLabel id="adults-label">Adults</InputLabel>
                                <Select labelId="adults-label" label="Adults">
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4+</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Message"
                                multiline
                                rows={4}
                                fullWidth
                                variant="outlined"
                                required
                            />
                        </Grid>

                        <Grid item xs={4} sx={{ mt: 3 }}>
                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                
                            >
                                Reserve Now
                            </Button>
                        </Grid>


                    </Box>
                </Grid>

                {/* Contact Info Section */}
                <Grid item xs={12} md={5}>
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            Address:
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            205/B-1, Plaza at 106, Sector-106, Gurgaon (122006) India
                        </Typography>

                        <Typography variant="h6" gutterBottom>
                            Phone:
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            (+91) 95601 99201
                        </Typography>

                        <Typography variant="h6" gutterBottom>
                            Email:
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            skywayholidays106@gmail.com
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Reservationform;
