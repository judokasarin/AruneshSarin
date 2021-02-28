import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

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
}));

const Skills =() =>{
const classes = useStyles();
    return(<div>
    <div className={classes.diagonalBox}>
        <div className={classes.contentBox}> 
        <Typography variant="h2"  color="text.secondary" gutterBottom className={classes.headerText}>
       Skills
        </Typography>
    </div>
    </div>
    </div>
)};

export default Skills;