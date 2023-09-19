import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    height: "55px",
    overflow: "hidden",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
      <BottomNavigation className={classes.bottomNavContainer}>
          <a
              href="https://github.com/userprateek"
              target="_blank"
              rel="noopener noreferrer"
          >
              <BottomNavigationAction
                  icon={<GitHubIcon />}
                  className={classes.root}
              />
          </a>
          <a
              href="https://www.linkedin.com/in/userprateek"
              target="_blank"
              rel="noopener noreferrer"
          >
              <BottomNavigationAction
                  icon={<LinkedInIcon />}
                  className={classes.root}
              />
          </a>
          <a
              href="https://www.instagram.com/userprateek"
              target="_blank"
              rel="noopener noreferrer"
          >
              <BottomNavigationAction
                  icon={<InstagramIcon />}
                  className={classes.root}
              />
          </a>
      </BottomNavigation>
  );
};

export default Footer;
