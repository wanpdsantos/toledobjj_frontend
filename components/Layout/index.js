import { makeStyles } from  '@material-ui/core'
import Head from 'next/head'
import TopBar from './TopBar'

const useStyles = makeStyles((theme) => ({

    root: {
        backgroundColor: theme.palette.background.dark,
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        width: '100vw',
    },
    wrapper:{
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: '7em',
        [theme.breakpoints.up('lg')]:{
            paddingLeft: 0,
        },
    },
    contentContainer:{
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    content:{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },

}));

function Layout({children , title}){

    const classes = useStyles();

    return(
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content='initial-scale=1.0,width=device-width'/>
        </Head>

        <div className={classes.root}>

            <TopBar/>

            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>

    </>
    );
}

export default Layout;