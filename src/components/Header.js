import * as React from 'react';

import { AppBar, Box, Toolbar, Typography, Button, Menu, MenuItem, Fade} from '@mui/material';
import Grid from '@mui/material/Grid';
//import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";


export default function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //Above code is for dropdown menu of about

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={0.5}>
            <Grid item xs={2}>
              <Typography> A a s t h a </Typography>
            </Grid>
            <Grid item xs={0.75}>
              <Button component={RouterLink} to="/" color="inherit">Home</Button>
            </Grid>

            <Grid item xs={1}>
              <Button 
                color="inherit" 
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>About</Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>About us</MenuItem>
                <MenuItem onClick={handleClose}>Mission & Vision</MenuItem>
                <MenuItem onClick={handleClose}>BOD</MenuItem>
                <MenuItem onClick={handleClose}>Message from Chairperson</MenuItem>
                <MenuItem onClick={handleClose}>Message from CEO</MenuItem>

              </Menu>

            </Grid>


            <Grid item xs={1}>
              <Button color="inherit">Service</Button>
            </Grid>
            <Grid item xs={1}>
              <Button component={RouterLink} to="/gallery" color="inherit">Gallery</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit">Program</Button>
            </Grid>
            <Grid item xs={1}>
            <Button component={RouterLink} to="/notice" color="inherit">Notice</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit">News</Button>
            </Grid>
            <Grid item xs={1}>
              <Button component={RouterLink} to="/downloads" color="inherit">Downloads</Button>
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
