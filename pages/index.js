import { makeStyles } from  '@material-ui/core';
import Layout from '../components/Layout';
import Box from '@material-ui/core/Box';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({

  boxUnderDevelopment: {
    display: 'flex',
    justifyContent: 'center',
    
  },
  carousel: {
    cursor: 'pointer',
    height: '70vh',
    marginLeft: theme.spacing(3),
  },
  paperCarousel: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    backgroundImage:'/img/home/HOME_Carousel_BoxBackground.jpg',
  },
  

}));

function Home() {

  const classes = useStyles();



  return (
    
    <Layout title="TOLEDO BJJ ACADEMY">
      
      <Box flexDirection='row'>
        <Box>

          <Carousel>
            
            <Paper className={classes.paperCarousel}>
              <img src="/img/home/HOME_Carousel_1.jpg" alt="Training" className={classes.carousel}/>
            </Paper>

            <Paper className={classes.paperCarousel}>
              <img src="/img/home/HOME_Carousel_2.jpg" alt="Training" className={classes.carousel}/>
            </Paper>

            <Paper className={classes.paperCarousel}>
              <img src="/img/home/HOME_Carousel_3.jpg" alt="Training" className={classes.carousel}/>
            </Paper>

          </Carousel>
        </Box>
        
        <Box>
          <h1>
            Horarios Disponíveis
          </h1>
        </Box>

        <Box>
          <h1>
            Localização
          </h1>
        </Box>

        <Box>
          <h1>
            Agende uma Aula Experimental!
          </h1>
        </Box>

      </Box>

    </Layout>
  )
};

export default Home;
