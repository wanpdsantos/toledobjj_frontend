import { makeStyles } from  '@material-ui/core'
import Layout from '../components/Layout';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({

  boxUnderDevelopment: {
    display: 'flex',
    justifyContent: 'center',
  },
  

}));

function Home() {

  const classes = useStyles();

  return (
    
    <Layout title="TOLEDO BJJ ACADEMY">

      <Box className={classes.boxUnderDevelopment}>
        <h1>
          Site em construção. Em breve teremos novidades!
        </h1>
      </Box>

    </Layout>
  )
}

export default Home;
