import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
    return(

        <AppBar className={classes.root} color="default">

            <Toolbar className={classes.toolbar}>

                <Hidden mdUp>

                    <Box alignItems='center'>
                        <MenuIcon/>
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
    );

}

export default TopBar;