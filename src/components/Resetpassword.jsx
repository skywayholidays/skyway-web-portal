import React, { useState } from 'react';
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

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: '100%',
    maxWidth: 400,
    margin: theme.spacing(2),
    maxHeight: '60vh', // Ensure responsiveness by limiting height
    overflowY: 'auto', // Allow scrolling if content overflows
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

export default function Resetpassword() {
  const [open, setOpen] = useState(true);
  const fullScreen = useMediaQuery('(max-width:600px)');

  const handleClose = (event, reason) => {
    if (reason === 'backdropClick') {
      return; // Prevent closing on backdrop click
    }
    setOpen(false);
  };

  return (
    <StyledDialog open={open} onClose={handleClose} fullScreen={fullScreen}>
      <DialogTitle>Reset Password</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{ newPassword: '', confirmPassword: '' }}
          validationSchema={passwordSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log('Password reset submitted:', values);
              setSubmitting(false);
              setOpen(false); // Close dialog only on successful submission
            }, 500);
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
                error={touched.newPassword && errors.newPassword}
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
                error={touched.confirmPassword && errors.confirmPassword}
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
                Reset Password
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </StyledDialog>
  );
}
