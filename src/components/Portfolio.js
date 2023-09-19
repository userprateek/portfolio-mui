import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image1 from "../images/react-redux.jpg";
import image2 from "../images/codeigniter.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
    {
        name: "Cargo - web",
        description: `A React Application that Act as an interface for Inventory management system \n
    This app is intended to used by Cargo operators to perform operatons in their online inventory such as Cargo Booking, dispatch,Receive and Delivery`,
        image: image1,
    },
    {
        name: "Ticket Booking App",
        description: `A React project that is integrated with a bus ticket booking system at an enterprise level.\n
    This application manages the booking process across websites. It functions as a frontend that utilizes API calls to display pages including bus search,seat selection,passenger information and checkout page.`,
        image: image1,
    },
    {
        name: "POLLER CRONJOB",
        description: `Php script running as cronjob to handle Incomplete orders in website\n
        this project runs at definite intervals in website, checks for incomplete orders in database, process the incomplete order to mark them success, fail,waiting or rejected`,
        image: image2,
    },
    {
        name: "THEME DEVELOPMENT",
        description: `Added more theme into a website builder project.\n
        this website builder can generate a full fledged bus ticket booking website using pre defined themes and bus operator data, Added three themes into the project`,
        image: image2,
    },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{whiteSpace:'pre-wrap'}}>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
