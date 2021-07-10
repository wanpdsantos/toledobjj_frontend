import { Box, Paper, makeStyles, ListItemSecondaryAction } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({

  paperCarousel: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
  },

}));

function HomeCarousel(items){

  return (
    <Carousel>
      {
        items.map( (thumb, title,index) => <Item key={index} thumb={thumb} title={title} /> )
      }
    </Carousel>
  )
}

function Item(props) {
    
    const classes = useStyles();
    return (
      <Paper className = {classes.paperCarousel}>
        <img src={props.items.thumb} alt={props.items.title}/>
      </Paper>
    )
}

export default HomeCarousel;