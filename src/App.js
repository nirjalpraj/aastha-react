import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import * as React from 'react';

import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Slide } from '@mui/material';
import Grid from '@mui/material/Grid';
import TabPanel from './components/SideComponent';

     

function Item(props)
{
    return (
        <Paper >
          <img
            width="800" height="500"
            
            borderRadius= "30"
            src={`${props.item.img}?w=800&h=500&fit=crop&auto=format`}
            srcSet={`${props.item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={props.item.title}
            loading="lazy"
          />
            <h2>{props.item.title}</h2>
            <p>{props.item.description}</p>
        </Paper>
    )
}


function App() {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    }
]
  return (
    <div className="App">
      <Header/>

      <Grid container spacing={2} paddingTop={2.5}>
        <Grid item xs="1"></Grid>
        <Grid item xs="7">
          <Carousel
          fullHeightHover={false} 
          navButtonsAlwaysVisible={true}
          >
              {
                  itemData.map( (item, i) => <Item key={i} item={item} /> )
              }
          </Carousel>

        </Grid>
        <Grid item xs="3">
              <TabPanel/>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}

export default App;
