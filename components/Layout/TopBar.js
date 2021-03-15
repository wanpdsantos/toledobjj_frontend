import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import AccountCircle from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({

    root: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.default,

    },
    toolbar:{
        minHeight: '7em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        cursor: 'pointer',
        height: '5em',
        marginLeft: theme.spacing(3),
        
    },
    menuItems:{
        padding:'2px 4px',
        display: 'flex',
        alignItems: 'center',
        height: 30,
        width: 500,
    },

}));

function TopBar () {
    const classes = useStyles();

    const [state, setState] = React.useState(false);

    const toogleDrawer = (open) => (event ) => {
        setState(open);
    };
        
    return(
    
    <>
        <AppBar className={classes.root} color="default">

            <Toolbar className={classes.toolbar}>

                <Hidden mdUp>

                    <Box alignItems='center'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toogleDrawer(true)}
                            edge="start"
                            
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box alignItems='center'>
                        <Link href='/'>
                            <img src="/img/TopBar_LogoSM.png" alt="Logo" className={classes.logo}/>
                        </Link>
                    </Box>

                    <Box alignItems='center'>
                        <AccountCircle/>
                    </Box>
                    
                </Hidden>

                <Hidden smDown>

                    <Box alignItems='center'>
                        <Link href='/'>
                            <img src="/img/TopBar_Logo.png" alt="Logo" className={classes.logo}/>
                        </Link>
                    </Box>

                    <Box className={classes.menuItems}>
                        <Link href='/Membros'>
                            <Button color="inherit">Membros</Button>
                        </Link>

                        <Link href='/Sobre'>
                            <Button color="inherit">Sobre</Button>
                        </Link>

                        <Link href='/Loja'>
                            <Button color="inherit">Loja</Button>
                        </Link>
                    </Box>

                    <Box>
                        <Button color="inherit" startIcon={<AccountCircle/>}>Entrar</Button>
                    </Box>

                </Hidden>

            </Toolbar>

        </AppBar>

        <SwipeableDrawer
            anchor="top"
            open={state}
            onClose={toogleDrawer(false)}
        >

            <List>
                <ListItem button key='Membros'>
                    <Link href="/Membros" passHref>
                        <ListItemText primary='Membros' />
                    </Link>
                </ListItem>
                <ListItem button key='Sobre'>
                    <Link href="/Sobre" passHref>
                        <ListItemText primary='Sobre' />
                    </Link>
                </ListItem>
                <ListItem button key='Loja'>
                    <Link href="/Loja" passHref>
                        <ListItemText primary='Loja' />
                    </Link>
                </ListItem>
            </List>

        </SwipeableDrawer>
    
    </>
    );

}

export default TopBar;