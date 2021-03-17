import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    diagonalBox: {
        position: 'relative',
        padding: '9.719vw',
        margin: '0 auto',
       "&:before" : {
        boxSizing: 'border-box',
          content: "' '",
          position: 'absolute',
          left: '0',
          top: '0',
          right: '0',
          bottom: '0',
          transform: 'skewY(-11deg)',
          transformOrigin: '50% 0',
          outline: '1px solid transparent',
          
          backgroundImage: 'linear-gradient(45deg, #654ea3, #eaafc8)',
          backfaceVisibility: 'hidden',
    
        }
    
      },

      contentBox : {
        boxSizing: 'border-box',
        maxWidth: '100vw',
        margin: '0 auto',
        padding: '1.5em',
        position: 'relative',
          
      },

    headerText : {
        color : 'white',
        fontSize: '2.5em',
        margin: '0 0 0.5em',
        fontWeight: '900',
    },
    ContentText : {
        color : 'white',
        fontSize:'1.25em',
        margin: '0',
        lineHeight: '1.5',
    },
    image :{
        height: '20vh',
        width: '20vw',
    }
}));

const About =() =>{
const classes = useStyles();
    return(
    <div className={classes.diagonalBox}>
    <div className={classes.contentBox}> 
        <Typography variant="h2"  color="text.secondary" gutterBottom className={classes.headerText}>
            About Me
        </Typography>  
        <Typography variant="subtitle1"  color="text.secondary" gutterBottom className={classes.ContentText} >
            Experienced Software Engineer with a demonstrated history of working in the information technology and services industry with a passion to make web applications.  
        </Typography> 
    </div>
    </div>
    
)};

export default About;