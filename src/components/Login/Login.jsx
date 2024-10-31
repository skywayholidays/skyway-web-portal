import React, { useState } from 'react';
import { TextField, Button, Typography, CircularProgress, Box, Container, IconButton, InputAdornment, Alert } from '@mui/material';
import { FaUser, FaLock } from 'react-icons/fa';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { _create } from '../../utils/apiUtils';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [generalError, setGeneralError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setGeneralError('');

    if (!email || !password) {
      setGeneralError('Both email and password are required.');
      setLoading(false);
      return;
    }

    try {
      const response = await _create('/auth/login', { email, password });
      const { token, _id, first_name, last_name } = response;

      // Save token in localStorage
      localStorage.setItem('token', token);
      // Save user details in localStorage as a JSON string
      localStorage.setItem('user', JSON.stringify({ _id, first_name, last_name, email }));

      setSuccessMessage('Login successful!');

      setTimeout(() => {
        navigate('/admin-dashboard');
      }, 2000);
    } catch (error) {
      setGeneralError(error?.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
      <Box
        sx={{
          padding: 4,
          backgroundColor: '#ffffff',
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
          Login
        </Typography>

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        {generalError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {generalError}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: <FaUser style={{ marginRight: 8 }} />,
            }}
            sx={{ backgroundColor: '#ffffff', fontSize: '0.9rem', mb: 2 }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: <FaLock style={{ marginRight: 8 }} />,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: '#ffffff', fontSize: '0.9rem', mb: 2 }}
          />
          {loading ? (
            <CircularProgress size={24} sx={{ marginTop: 2 }} />
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ fontSize: '0.9rem', marginTop: 2, backgroundColor: '#24AB70', '&:hover': { backgroundColor: '#22C55E' } }}
            >
              Login
            </Button>
          )}
        </form>

        <Typography variant="body2" sx={{ mt: 2 }}>
          <span>Not a user? </span>
          <Link href="/signup" sx={{ textDecoration: 'none', color: '#1976d2' }}>
            Sign up here
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
