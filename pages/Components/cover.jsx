
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    
headerText : {
        color : 'white',
        textAlign: 'center',
        margin:'10vh auto 0em',
        padding: '0 1em',
        maxWidth:'42rem',
        lineHeight: '1.2',
        transform: 'skewY(-11deg)',
        fontSize: '3em',
        textTransform: 'uppercase',
        fontWeight: '900',
    },


    introText : {
            fontSize: '1.25em',
            transform: 'skewY(-11deg)',
            margin: '0em auto 5em',
            textAlign: 'center',
            background: '#fff',
            color: '#003',
            fontWeight: '900',
            padding: '0.5em',
            textTransform: 'uppercase',
    }
  }));



const Cover = () => {
    const classes = useStyles();
    return(
    <div>
        <div></div>
	    <Container>
            {''}
            {''}
            <Typography variant='h1' color="text.secondary" className={classes.headerText} >
                Arunesh Sarin
            </Typography>
            <div className={classes.introText}>
                I make things for the Web
            </div>
            </Container> 
            </div>
     
    )
};


export default Cover;