import { Typography,Grid,Box,Link } from '@mui/material';
import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";



const Footer = () => {
  return(
    <Box paddingTop={8} sx={{backgroundColor: '#078080', minHeight: '30vh'}}>
      <Grid container spacing={2}>
        <Grid item xs={1}/>
        <Grid container direction='column' item xs={3} spacing={2}>
          <Grid item>
            <Typography>About Us </Typography>
          </Grid>

          <Grid item>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </Typography>
          </Grid>

        </Grid>

        <Grid container direction='column' item xs={3} spacing={2}>
          <Grid item>
            <Typography>Helpful Links</Typography>
          </Grid>

          <Grid item>
            <Link href="https://www.nefscun.org.np/" underline="hover" color='#fff' >Nefscun</Link>
          </Grid>

          <Grid item>
            <Link href="http://bhaktapurdcu.coop.np//" underline="hover" color='#fff'>Bhaktapur Jilla Bachat Sangh</Link>
          </Grid>

          <Grid item>
            <Link href="https://ncfnepal.com.np/" underline="hover" color='#fff'>National Cooperative Federation of Nepal</Link>
          </Grid>

          <Grid item>
            <Link href="http://molcpa.gov.np/" underline="hover" color='#fff'>Ministry Of Land Management, Cooperatives And Poverty Alleviation</Link>
          </Grid>

          <Grid item>
            <Link href="http://www.deoc.gov.np/" underline="hover" color='#fff'>Department Of Cooperatives</Link>
          </Grid>

        </Grid>

        <Grid container direction='column' item xs={3} spacing={2}>
          <Grid item>
            <Typography>Quick Links</Typography>
          </Grid>

          <Grid item>
            <Link component={RouterLink} to="/" underline="hover" color='#fff'>Home</Link>
          </Grid>

          <Grid item>
            <Link component={RouterLink} to="/notice" underline="hover" color='#fff'>Notice</Link>
          </Grid>

          <Grid item>
            <Link component={RouterLink} to="/downloads" underline="hover" color='#fff'>Downloads</Link>
          </Grid>

          <Grid item>
            <Link component={RouterLink} to="/news" underline="hover" color='#fff'>News</Link>
          </Grid>

          <Grid item>
            <Link component={RouterLink} to="/service" underline="hover" color='#fff'>Service</Link>
          </Grid>


        </Grid>

        <Grid container direction='column' item xs={3}>

        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;