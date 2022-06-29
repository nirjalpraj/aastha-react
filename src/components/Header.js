import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={0.5}>
            <Grid item xs={2}>
              <Typography> A a s t h a </Typography>
            </Grid>
            <Grid item xs={0.75}>
              <Button color="inherit">Home</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit">News</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit">About</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit">Service</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit">Gallery</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit">Program</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit">Notice</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit">Downloads</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit">Contact</Button>
            </Grid>
          </Grid>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
