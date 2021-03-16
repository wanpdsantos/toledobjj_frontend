import { createMuiTheme, makeStyles, MuiThemeProvider, responsiveFontSizes } from  '@material-ui/core';
import Layout from '../components/Layout';
import Box from '@material-ui/core/Box';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AvTimer from '@material-ui/icons/AvTimer';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Instagram from '@material-ui/icons/Instagram';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'

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
    width:'15em',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'1em',
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

}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Home() {

  const classes = useStyles();

  const carouselItems = [
    {
      thumb: "/img/home/HOME_Carousel_1.jpg",
      title: "Training 1",
    },
    {
      thumb: "/img/home/HOME_Carousel_2.jpg",
      title: "Training 1",
    },
    {
      thumb: "/img/home/HOME_Carousel_3.jpg",
      title: "Training 1",
    },

  ];

  return (
    
    <Layout title="TOLEDO BJJ ACADEMY">
      
      <Box flexDirection='row' >

        <Box >
          <Carousel>
            {carouselItems.map((item) => (
                <Paper className={classes.paperCarousel}>
                  <img src={item.thumb} alt={item.title} className={classes.imgCarousel} />
                </Paper>
            ))}
          </Carousel>

        </Box>

        <Box marginTop='2em' className={classes.boxSessions}>

          <Box display='flex' alignItems='center'>
            <AvTimer/>
            <h1>Horário das Aulas</h1>
          </Box>

          <Box width='90%'>
            <Grid container   
              direction="row"
              justify="space-evenly"
              alignItems="center">

              <Grid key={1} item>
                <Paper className={classes.paperGrid}>
                  <h3>Segunda</h3>
                  <h4>BJJ: 20h - 22h - Pedro Toledo</h4>
                </Paper>
              </Grid>

              <Grid key={2} item>
                <Paper className={classes.paperGrid}>
                  <h3>Quarta</h3>
                  <h4>BJJ: 20h - 22h - Pedro Toledo</h4>
                </Paper>
              </Grid>

              <Grid key={3} item>
                <Paper className={classes.paperGrid}>
                  <h3>Sexta</h3>
                  <h4>BJJ: 20h - 22h - Pedro Toledo</h4>
                </Paper>
              </Grid>
            </Grid>
          </Box>

        </Box>

        <Box marginTop='4em' className={classes.boxSessions}>

          <Box display='flex' alignItems='center'>
            <LocationOnOutlined/>
            <h1>Localização</h1>
          </Box>

          <Box className={classes.boxEndereco}>
            <Grid container
              direction="row"
              justify="space-evenly"
              alignItems="center">

              <Grid key={1} item>
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                  <h3>Rua Inhambupe</h3>
                  <h3>Resgate</h3>
                  <h3>Salvador/BA</h3>
                  <h5>Como Chegar? Virar a primeira direita após Academia SmartFit da Rua Silveira Martins.</h5>
                </Box>
              </Grid>

              <Grid key={2} item>
                <Box>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.166029958064!2d-38.466977684564974!3d-12.961225563114171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161ac2ba457403%3A0x6bc6be9da33acefa!2sR.%20Inhambupe%20-%20Resgate%2C%20Salvador%20-%20BA%2C%2040301-110!5e0!3m2!1spt-BR!2sbr!4v1615851105943!5m2!1spt-BR!2sbr" width="400" height="300"></iframe>
                </Box>
              </Grid>

            </Grid>

          </Box>
        </Box>

        <Box marginTop='4em' className={classes.boxSessions} width='100%' paddingLeft='5em' paddingRight='5em'>

          <Box display='flex' alignItems='center'>
            <MuiThemeProvider theme={theme}>
              <Typography variant='h1'>
                Venha fazer parte da Equipe!
                <img src="/img/home/HOME_PunchIcon.jpg" height='50em' alt="Punch"/>
              </Typography>
            </MuiThemeProvider>

          </Box>

          <Box display='flex' alignItems='center'>
            <MuiThemeProvider theme={theme}>
              <Typography variant='subtitle1'>
                Agende uma Aula Experimental!
                <a href="https://l.instagram.com/?u=http%3A%2F%2Ftinyurl.com%2Ftf0jq6ou%2F&e=ATOBV2Y0pJ395F_t3gt4lF0xkqbev136H3N6NgAuvcVGKy4WXDrpMdgNbfT_0vdEq0qmpXApiZf6xTodixbg9FpKpXHosEaL79QXOg&s=1" target="_blank" rel="noopener noreferrer">
                  <WhatsApp fontSize='large'/>
                </a>
              </Typography>
            </MuiThemeProvider>

          </Box>

          <Box display='flex' flexDirection='column' alignItems='center' marginTop='4em' marginBottom='4em'>
            <MuiThemeProvider theme={theme}>
              <Typography variant='h2'>
                Siga Nossas Redes
              </Typography>
              <a href='https://www.instagram.com/toledobjjacademy/' target="_blank" rel="noopener noreferrer">
                <Instagram fontSize='large'/>
              </a>
            </MuiThemeProvider>
          </Box>
        
        </Box>

        <AppBar color="primary" className={classes.footer}>
            <h4>TOLEDO BJJ ACADEMY</h4>
        </AppBar>

      </Box>

    </Layout>
  )
};

export default Home;
