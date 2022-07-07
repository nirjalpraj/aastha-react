import * as React from 'react';


import Header from  "../components/Header";
import Footer from "../components/Footer";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardActions,CardMedia, Button } from "@mui/material";




const Gallery = () => {
    return(
        <div>
            <Header/>
                  <GridFolder/>           
            <Footer/>

        </div>
    );
}

export default Gallery;

const GridFolder = () =>{
  return(
    <Grid container spacing={4} padding={2.5}>
      {itemData.map((item)=>(
        <Grid item>
          <Card sx={{ width: 345 }}>
            <CardMedia
              component="img"
              height="150"
              image={item.img}
              alt="green iguana"
            />
            {/* <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                </CardContent> */}
            <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
      </Grid>
    ))
    }
    

    </Grid>

  );
}

const itemData = [
    {
      img: 'https://source.unsplash.com/random/200*300/?breakfast',
      title: 'Breakfast',
    },
    {
      img: 'https://source.unsplash.com/random/200*300/?burger',
      title: 'Burger',
    },
    {
      img: 'https://source.unsplash.com/random/?camera',
      title: 'Camera',
    },
    {
      img: 'https://source.unsplash.com/random/?coffee',
      title: 'Coffee',
    },
    {
      img: 'https://source.unsplash.com/random/?hats',
      title: 'Hats',
    },
    {
      img: 'https://source.unsplash.com/random/?honey',
      title: 'Honey',
    }
]