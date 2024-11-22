import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  LinearProgress,
  Typography,
  Box,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: '100%',
    maxWidth: 400,
    margin: theme.spacing(2),
    maxHeight: '60vh',
    overflowY: 'auto',
  },
}));

const passwordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(30, 'Password must not exceed 30 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?])/,
      'Must contain at least one uppercase, one lowercase, one number and one special character'
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Required'),
});

const PasswordStrengthIndicator = ({ password }) => {
  const getStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]+/)) strength += 25;
    if (password.match(/[A-Z]+/)) strength += 25;
    if (password.match(/[0-9]+/)) strength += 12.5;
    if (password.match(/[!@#$%^&*?]+/)) strength += 12.5;
    return strength;
  };

  const strength = getStrength(password);
  const color = strength < 50 ? 'error' : strength < 75 ? 'warning' : 'success';

  return (
    <Box sx={{ mt: 1 }}>
      <LinearProgress variant="determinate" value={strength} color={color} />
      <Typography variant="caption" color={color}>
        {strength < 50 ? 'Weak' : strength < 75 ? 'Medium' : 'Strong'} Password
      </Typography>
    </Box>
  );
};

export default function ResetPassword() {
  const [open, setOpen] = useState(true);
  const fullScreen = useMediaQuery('(max-width:600px)');
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenParam = queryParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
    } else {
      alert('Invalid token or link');
      navigate('/'); // Redirect to home if token is missing
    }
  }, [location, navigate]);

  const handleClose = (event, reason) => {
    if (reason === 'backdropClick') {
      return; // Prevent closing on backdrop click
    }
    setOpen(false);
  };

  const resetPassword = async (data) => {
    try {
      const response = await axios.post(
        'https://skyway-holidays-backend-api.onrender.com/api/v1/auth/reset-password',
        data
      );
      alert(response.data.message || 'Password reset successful!');
      navigate('/'); // Redirect to home on success
    } catch (error) {
      console.error('Error resetting password:', error);
      alert(error.response?.data?.message || 'Password reset failed!');
    }
  };

  return (
    <StyledDialog open={open} onClose={handleClose} fullScreen={fullScreen}>
      <DialogTitle>Reset Password</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{ newPassword: '', confirmPassword: '' }}
          validationSchema={passwordSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            resetPassword({ token, password: values.newPassword });
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting, values }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                margin="normal"
                name="newPassword"
                label="New Password"
                type="password"
                error={touched.newPassword && Boolean(errors.newPassword)}
                helperText={touched.newPassword && errors.newPassword}
              />
              <PasswordStrengthIndicator password={values.newPassword} />
              <Field
                as={TextField}
                fullWidth
                margin="normal"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                helperText={touched.confirmPassword && errors.confirmPassword}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                sx={{ mt: 3, mb: 2 }}
              >
                {isSubmitting ? 'Resetting...' : 'Reset Password'}
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </StyledDialog>
  );
}
