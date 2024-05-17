import React from 'react';
// import { GoogleLogin } from 'react-google-login';

import { GitHub } from '@mui/icons-material'
import { Button } from '@mui/material'

const responseGitHub = (response) => {
  console.log(response);
};

// https://react-oauth.vercel.app/

export const GitHubLoginButton = () => {

  return (
    <Button
      onClick={() => {}}
      variant="outlined"
      color="inherit"
      startIcon={<GitHub />}
      fullWidth
      sx={{ mt: 3, mb: 2 }}
    >
      Sign in with Github
    </Button>
  )
};
