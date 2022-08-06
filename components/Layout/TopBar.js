import { AppBar, Box, Button, createMuiTheme, Hidden, makeStyles, MuiThemeProvider, responsiveFontSizes, Toolbar, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: '7em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toolbarSM: {
    minHeight: '7em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    cursor: 'pointer',
    height: '5em',
    marginLeft: theme.spacing(3),

  },
  menuItems: {
    padding: '2px 4px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 500,
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

const TopBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const toogleDrawer = (open) => (event) => {
    setState(open);
  };
  return (
    <AppBar className={classes.root} color="default">
      <Hidden mdUp>
        <Toolbar className={classes.toolbarSM}>
          <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
            <Link href='/'>
              <img src="/img/TopBar_LogoSM.webp" alt="Logo" className={classes.logo} />
            </Link>
          </Box>
        </Toolbar>
      </Hidden>

      <Hidden smDown>
        <Toolbar className={classes.toolbar}>
          <Box alignItems='center'>
            <Link href='/'>
              <img src="/img/TopBar_LogoSM.webp" alt="Logo" className={classes.logo} />
            </Link>
          </Box>

          <Box className={classes.menuItems}>
            <Link href='/'>
              <Button color="inherit">
                <MuiThemeProvider theme={theme}>
                  <Typography variant='h4' align='center'>
                    TOLEDO JIU JITSU
                  </Typography>
                </MuiThemeProvider>
              </Button>
            </Link>
          </Box>

          <Box display='flex' justifyContent='flex-end'>
          </Box>
        </Toolbar>
      </Hidden>
    </AppBar>
  );
}

export default TopBar;