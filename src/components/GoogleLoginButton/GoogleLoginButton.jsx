import React from 'react';
// import { GoogleLogin } from 'react-google-login';

import { Google } from '@mui/icons-material'
import { Button } from '@mui/material'

const responseGoogle = (response) => {
  console.log(response);
};

// https://react-oauth.vercel.app/

export const GoogleLoginButton = () => {
  return (
    <Button
      onClick={() => {}}
      variant="outlined"
      color="primary"
      startIcon={<Google />}
      fullWidth
      sx={{ mt: 3, mb: 2 }}
    >
      Sign in with Google
    </Button>
  )
};
