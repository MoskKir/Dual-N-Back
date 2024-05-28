import React from 'react';
import {
  Typography,
  IconButton,
  Container,
  Toolbar,
  Button,
  AppBar,
  Box,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { useScreen } from 'hooks';

export const Header = () => {
  const { isMobile } = useScreen();

  return (
    <AppBar position="static"
      color='transparent'
    >
      <Container maxWidth="none">
        <Toolbar disableGutters
          sx={{
            justifyContent: "space-between",
          }}
        >

          { isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dual N-Back
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {false && (
              <Typography
                variant="body1"
                noWrap
                component="a"
                href="/info"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Info
              </Typography>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="text"
              color="inherit"
              href="/login"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
