import { Box, createMuiTheme, IconButton, makeStyles, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { common, green, red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AvTimer from '@material-ui/icons/AvTimer';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YoutubeIcon from '@material-ui/icons/YouTube';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Layout from '../components/Layout';

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
    height: '20em',
    width: '25em',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1em',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '8em',
    position: 'relative',
    top: 'auto',
    bottom: 0,
  },
  BoxVenhaFazerParte: {
    backgroundImage: `url(${"/img/background.webp"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  button: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
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

const Home = (props) => {
  const classes = useStyles();
  const carouselItems = [
    {
      thumb: "/img/home/HOME_Carousel_1.webp",
      title: "Training 1",
    },
    {
      thumb: "/img/home/HOME_Carousel_2.webp",
      title: "Training 2",
    },
    {
      thumb: "/img/home/HOME_Carousel_3.webp",
      title: "Training 3",
    },
    {
      thumb: "/img/home/HOME_Carousel_4.webp",
      title: "Training 4",
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

        <Box display='flex' flexDirection='column' width='100%' justifyContent='center' alignItems='center' minHeight='35em' className={classes.BoxVenhaFazerParte}>
          <Box display='flex' alignItems='center'>
            <IconButton
              style={{ color: common.white }}
              aria-label="agendar aula"
              edge="start"
            >
              <AvTimer style={{ fontSize: 70 }} />
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
                      BJJ Fundamentos: 06h - 07h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Turma Mista: 08h - 09h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Kids: 09h - 10h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Kids: 17h - 18h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Kids: 18h - 19h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Iniciante: 19h - 20h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Avançado: 20h - 21h
                    </Typography>
                  </MuiThemeProvider>
                </Paper>
              </Grid>

              <Grid key={1} item>
                <Paper className={classes.paperGrid}>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h5' align='center' color='textPrimary'>
                      Terça
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Turma Mista: 07h - 08h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Iniciante: 19h - 20h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Avançado: 20h - 21h
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
                      BJJ Fundamentos: 06h - 07h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Mista: 08h - 09h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Kids: 18h - 19h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      Yoga: 19h - 20h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Avançado: 20h - 21h
                    </Typography>
                  </MuiThemeProvider>
                </Paper>
              </Grid>


              <Grid key={1} item>
                <Paper className={classes.paperGrid}>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h5' align='center' color='textPrimary'>
                      Quinta
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Turma Mista: 07h - 08h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Kids: 17h - 18h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Turma Mista: 19h - 20h
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
                      BJJ Fundamentos: 06h - 07h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Turma Mista: 08h - 09h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Kid: 09h - 10h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Kids: 18h - 19h
                    </Typography>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h6' align='center' color='textPrimary'>
                      BJJ Open Mat: 19h - 20h
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
              <LocationOnOutlined style={{ fontSize: 70 }} />
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
                      Rua Nossa Senhora do Resgate
                    </Typography>
                  </MuiThemeProvider>

                  <MuiThemeProvider theme={theme}>
                    <Typography variant='h5' align='center'>
                      Ed. Flecha Power, Sala 01
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
                    <iframe async defer src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.0431406781125!2d-38.4664580245156!3d-12.96080729023174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161becebec0c01%3A0x49b51edb0fabdbde!2sToledo%20Jiu%20Jitsu!5e0!3m2!1spt-BR!2sbr!4v1693484541779!5m2!1spt-BR!2sbr" width="400" height="300" allowFullScreen="" loading="lazy"></iframe>
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
              <img src="/img/home/HOME_PunchIcon.png" height='100em' alt="Punch" />
            </Box>

            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginTop='2em' paddingLeft='3em' paddingRight='3em'>
              <MuiThemeProvider theme={theme}>
                <Typography variant='h4' align='center' color='textPrimary'>
                  Agende uma Aula Experimental pelo nosso WhatsApp: (71) 99145-3771
                </Typography>
                <IconButton
                    className={classes.button}
                    style={{ color: green[500] }}
                    aria-label="agendar aula"
                    edge="start"
                    href={'https://wa.me/5571991453771'}
                >
                    <WhatsAppIcon style={{ fontSize: 70 }} />
                </IconButton>
              </MuiThemeProvider>
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
                href={'https://www.instagram.com/toledojiujitsu/'}
              >
                <InstagramIcon style={{ fontSize: 70 }} />
              </IconButton>

              <IconButton
                style={{ color: red[500] }}
                aria-label="Youtube-Link"
                edge="start"
                href={'https://www.youtube.com/channel/UCrf9r_--4MHHMCwuNsppXNg'}
              >
                <YoutubeIcon style={{ fontSize: 70 }} />
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
  return {
    props: {
    },
  }
}

export default Home;
