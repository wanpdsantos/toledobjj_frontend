import { createMuiTheme, makeStyles, MuiThemeProvider, responsiveFontSizes } from  '@material-ui/core';
import Layout from '../components/Layout';
import {Box, IconButton} from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AvTimer from '@material-ui/icons/AvTimer';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/YouTube';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import { green, common, red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({

  boxUnderDevelopment: {
    display: 'flex',
    justifyContent: 'center',
    
  },
  imgCarousel: {
    cursor: 'pointer',
    height: '70vh',
    marginLeft: theme.spacing(3),
  },
  paperCarousel: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
  },
  boxSessions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    
  },
  paperGrid: {
    display: 'flex',
    flexDirection: 'column',
    height: '15em',
    width:'25em',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'1em',
    backgroundImage: `url(${"/img/background.webp"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  boxEndereco: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    fontSize: '1.3em',
  },
  footer: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    minHeight:'8em',
    position:'relative',
    top: 'auto',
    bottom: 0,
  },
  BoxVenhaFazerParte: {
    backgroundImage: `url(${"/img/background.webp"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    
  }

}));

let theme = createMuiTheme({ 

  palette: {
    text: {
      primary: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: [
      'Staatliches',
      'cursive',
    ].join(','),
    h4: {
      fontSize: 37,
      letterSpacing: "0.08em",
    },
    h5: {

      letterSpacing: "0.08em",
    }

  },

});

theme = responsiveFontSizes(theme);

function Home(props) {

  const classes = useStyles();

  const carouselItems = [
    {
      thumb: "/img/home/HOME_Carousel_1.webp",
      title: "Training 1",
    },
    {
      thumb: "/img/home/HOME_Carousel_2.webp",
      title: "Training 1",
    },
    {
      thumb: "/img/home/HOME_Carousel_3.webp",
      title: "Training 1",
    },

  ];

  return (
    
    <Layout title="TOLEDO BJJ ACADEMY">
      
      <Box flexDirection='row' >

        <Box display='flex'>
          <Carousel>
            {carouselItems.map((item) => (
                <Paper className={classes.paperCarousel}>
                  <img src={item.thumb} alt={item.title} className={classes.imgCarousel} />
                </Paper>
            ))}
          </Carousel>

        </Box>
          
        <Box display='flex' flexDirection='column' width='100%' justifyContent='center' alignItems='center' minHeight='30em' className={classes.BoxVenhaFazerParte}>
          
          <Box display='flex' alignItems='center'>
            <IconButton
              style={{ color: common.white }}
              aria-label="agendar aula"
              edge="start"
            >
              <AvTimer style={{ fontSize: 70 }}/>
            </IconButton>
            <MuiThemeProvider theme={theme}>
              <Typography variant='h3' align='center' color='textPrimary'>
                Horário das Aulas
              </Typography>
            </MuiThemeProvider>
          
          </Box>

          <Box width='90%'>
            <Grid container   
              direction="row"
              justify="space-evenly"
              alignItems="center">

              <Grid key={1} item>
                <Paper className={classes.paperGrid}>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h5' align='center' color='textPrimary'>
                      Segunda
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ: 20h - 22h - Pedro Toledo
                    </Typography>
                  </MuiThemeProvider>
                </Paper>
              </Grid>

              <Grid key={2} item>
                <Paper className={classes.paperGrid}>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h5' align='center' color='textPrimary'>
                      Quarta
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ: 20h - 22h - Pedro Toledo
                    </Typography>
                  </MuiThemeProvider>
                </Paper>
              </Grid>

              <Grid key={3} item>
                <Paper className={classes.paperGrid}>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h5' align='center' color='textPrimary'>
                      Sexta
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ: 20h - 22h - Pedro Toledo
                    </Typography>
                  </MuiThemeProvider>
                </Paper>
              </Grid>
            </Grid>
          </Box>

        </Box>


   

        <Box marginTop='4em' className={classes.boxSessions}>

          <Box display='flex' alignItems='center'>
            <IconButton
              aria-label="agendar aula"
              edge="start"
            >
              <LocationOnOutlined style={{ fontSize: 70 }}/>
            </IconButton>

            <MuiThemeProvider theme={theme}>
              <Typography variant='h3' align='center'>
                Localização
              </Typography>
            </MuiThemeProvider>
          </Box>

          <Box className={classes.boxEndereco}>
            <Grid container
              direction="row"
              justify="space-evenly"
              alignItems="center">

              <Grid key={1} item>
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h5' align='center'>
                      Rua Inhambupe
                    </Typography>
                  </MuiThemeProvider>

                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h5' align='center'>
                      Bairro: Resgate
                    </Typography>
                  </MuiThemeProvider>

                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h5' align='center'>
                      Salvador/BA
                    </Typography>
                  </MuiThemeProvider>

                  <Box marginTop='2em'>
                    <MuiThemeProvider theme={theme}>
                      <Typography variant='h5' align='center'>
                      Como Chegar? Virar a primeira direita após Academia SmartFit da Rua Silveira Martins.
                      </Typography>
                    </MuiThemeProvider>
                  </Box>


                </Box>
              </Grid>

              <Grid key={2} item>
                <Box>
                  <iframe async defer src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.166029958064!2d-38.466977684564974!3d-12.961225563114171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161ac2ba457403%3A0x6bc6be9da33acefa!2sR.%20Inhambupe%20-%20Resgate%2C%20Salvador%20-%20BA%2C%2040301-110!5e0!3m2!1spt-BR!2sbr!4v1615851105943!5m2!1spt-BR!2sbr" width="400" height="300"></iframe>
                </Box>
              </Grid>

            </Grid>

          </Box>
        </Box>

        <Box marginTop='4em' className={classes.boxSessions} width='100%' >
          
          <Box display='flex' flexDirection='column' width='100%' justifyContent='center' alignItems='center' height='30em' className={classes.BoxVenhaFazerParte}>

            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginBottom='2em' paddingLeft='3em' paddingRight='3em'>
              <MuiThemeProvider theme={theme}>
                <Typography variant='h4' align='center' color='textPrimary' >
                  Venha fazer parte da Equipe Toledo BJJ !!!
                </Typography>
              </MuiThemeProvider>

              <img src="/img/home/HOME_PunchIcon.png" height='100em' alt="Punch"/>
            </Box>
            
            
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginTop='2em'paddingLeft='3em' paddingRight='3em'>
              <MuiThemeProvider theme={theme}>
                <Typography variant='h4' align='center' color='textPrimary'>
                  Agende uma Aula Experimental pelo nosso WhatsApp!
                  
                </Typography>
              </MuiThemeProvider>

              <IconButton
                style={{ color: green[500] }}
                aria-label="agendar aula"
                edge="start"
                href={'http://tinyurl.com/tf0jq6ou/'}
              >
                <WhatsAppIcon style={{ fontSize: 70 }}/>

              </IconButton>
              
            </Box>


          </Box>


          <Box display='flex' flexDirection='column' height='30em' justifyContent='center' alignItems='center'>
            <MuiThemeProvider theme={theme}>
              <Typography variant='h3'>
                Siga Nossas Redes
              </Typography>
            </MuiThemeProvider>
            
            <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>

              <IconButton
                aria-label="Instagram-Link"
                edge="start"
                href={'https://www.instagram.com/toledobjjacademy/'}
              >
                <InstagramIcon style={{ fontSize: 70 }}/>
              </IconButton>

              <IconButton
                style={{ color: red[500] }}
                aria-label="Youtube-Link"
                edge="start"
                href={'https://www.youtube.com/channel/UCrf9r_--4MHHMCwuNsppXNg'}
              >
                <YoutubeIcon style={{ fontSize: 70 }}/>
              </IconButton>

            </Box>

          </Box>
        
        </Box>

        <AppBar color="primary" className={classes.footer}>
          <MuiThemeProvider theme={theme}>
            <Typography variant='h6'>
            TOLEDO BJJ ACADEMY © TODOS OS DIREITOS RESERVADOS
            </Typography>
          </MuiThemeProvider>
        </AppBar>

      </Box>

    </Layout>
  )
};

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {

    },
  }
}


export default Home;
