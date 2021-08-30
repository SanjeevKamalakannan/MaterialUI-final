import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import woman from './assets/woman.jpg'; 

const useStyles = makeStyles((theme) => ({
    cardGrid : {
      padding : '40px 80px',
    },
    card : {
      borderRadius : '20px',
      height : '300px',
      width : '300px',
      display : 'flex',
      flexDirection : 'column'
    },
    cardMedia: {
      height: 0,
      paddingTop : "100%",
      
    },
    cardContent : {
      color : 'black'
    }
  }));
const Employee = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Grid item justify = "center" style={{ padding : "0 30px" }}>
                  <Card className={classes.card}>
                    <CardMedia
                    className = {classes.cardMedia}
                    image={woman}
                    title = "image title"
                    />
                    <CardContent className={classes.cardContent}>
                    
                    </CardContent>
                  </Card>
                  <Grid container justify = "center">
                    <Grid item>
                      <Typography  style={{fontFamily : "Montserrat" , fontSize : "16px" , paddingTop : "15px"}} variant='h6'>{props.name}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container justify = "center">
                    <Grid item>
                      <Typography  style={{fontFamily : "Montserrat",  paddingTop : "5px" , paddingBottom : "15px"}} variant='h6'> {props.email}</Typography>
                    </Grid>
                  </Grid>
                  
            </Grid>
        </div>
    );
};
export default Employee;