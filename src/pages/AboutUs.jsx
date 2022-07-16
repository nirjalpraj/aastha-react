import * as React from 'react';
import {Grid, Typography, Box} from '@mui/material';
import Header from '../components/Header';

const AboutUs = () => {
    return(
        <div>
        <Header/>
        <Box >
        <Grid container paddingTop={10} >
            <Grid item xs={2}/>
            <Grid container direction='column' spacing={5} item xs={6}>
                <Grid item>
                    <Typography variant='h4'>About Us</Typography>
                </Grid>

                <Grid item>
                    <img src="https://source.unsplash.com/random/?nature" alt="logo" style={{height:350, width:700}} />
                </Grid>
                
                <Grid item>
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        </Box>
        </div>
    );
}

export default AboutUs;