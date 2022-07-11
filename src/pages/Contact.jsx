import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import {Grid, Typography,Link} from '@mui/material';
import {
    layer,
    Map, Layers,
} from "react-openlayers"


const Contact = () => {
    
  return (
    <div>
        <Header/>
            <Grid container paddingTop={20}>
                <Grid item xs={1}/>
                <Grid container direction='column' item xs={6} justifyContent='center'>
                    <Grid item>
                        <Typography variant='h4'>Aastha Saving and Cooperative Limited</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant='h5'>Bolachhen-4, Bhaktapur</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant='h6'>Phone number: 01-6616904</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant='h6'>Mail Us at aastha.saccos@gmail.com <Link href="mailto:aastha.saccos@gmail.com" underline="none">send mail</Link></Typography>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Map view={{center:[0,0], zoom:2}}>
                        <Layers>
                            <layer.Tile></layer.Tile>
                        </Layers>
                    </Map>
                </Grid>
            </Grid>
        <Footer/>
    </div>
  )
}

export default Contact;