import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import projects from '../../src/projects';


const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    diagonalBox: {
          position: 'relative',
          padding: '9.719vw',
          marginTop: '-1px',
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
            backgroundImage: 'linear-gradient(-135deg, #ff0084, #33001b)',
           
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

const Projects = () => {
    const classes = useStyles();

  const openlink=(url) => {
    window.open(url);
     
    };
           
    return(
      <div className={classes.diagonalBox}>
        <div className={classes.contentBox}> 
          <Typography variant="h2" gutterBottom className={classes.headerText}>
            Projects
          </Typography>
          
            <Grid container
              spacing={3} 
              direction="row"
              justify="space-around"
              align-content = "center"
            >
          {projects.map(projects => (
            <Grid item md={4} xs={12} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="240"
                    image={projects.img}
                    title={projects.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {projects.title}
                    </Typography>
                    <Typography component="p">{projects.excerpt}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" variant="contained" onClick={()=>{openlink(projects.liveLink)}} >
                    Live Demo
                  </Button>
                  <Button size="small" color="primary" variant="contained" onClick={()=>{openlink(projects.gitLink)}} >
                    Source Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
                    
          ))}
                </Grid>
              
              </div>
    </div>
             
            );
          };

export default Projects;