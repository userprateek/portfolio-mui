import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "o auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0,
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both",
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
            },
        },
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)",
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato",
            },
        },
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        color: "#fff",
        background: "tomato",
        lineHeight: 1,
        padding: "0.5rem 1rem",
        "&:before": {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",
            },
            "&:nth-of-type(2n):before": {
                display: "none",
            },
        },
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
    },
    subHeading: {
        color: "#fff",
        padding: 0,
        textTransform: "uppercase",
    },
    body1: {
        color: "tomato",
    },
    subtitle1: {
        color: "tan",
    },
}));
const experiences = [
    {
        year: 2023,
        projects: [
            {
                projectName: "Cargo - web",
                companyName: "MAVENTECH LABS PRIVATE LIMITED",
                projectDetails: [
                    {
                        primary:
                            "React App that Act as an interface for Inventory management system",
                        secondary:
                            "I was the team lead for a project, with five team members. I provided guidance and management support to the team throughout the duration of the project.",
                    },
                    {
                        primary:
                            "This app is intended to used by Cargo operators to perform operatons in their online inventory such as Cargo Booking, dispatch,Receive and Delivery",
                        secondary: null,
                    },
                    {
                        primary:
                            "Tech stack: React.js, Redux, Material UI, SCSS, Rest API,",
                        secondary: null,
                    },
                ],
            },
        ],
    },
    {
        year: 2022,
        projects: [
            {
                projectName: "Ticket Booking App",
                companyName: "MAVENTECH LABS PRIVATE LIMITED",
                projectDetails: [
                    {
                        primary:
                            "A React project that is integrated with a bus ticket booking system at an enterprise level.",
                        secondary:
                            "This application manages the booking process across websites. It functions as a frontend that utilizes API calls to display pages including bus search,seat selection,passenger information and  checkout page.",
                    },
                    {
                        primary:
                            "Tech stack: React.js, Redux, SCSS, Rest API,Codeigniter",
                        secondary: null,
                    },
                ],
            },
        ],
    },
    {
        year: 2021,
        projects: [
            {
                projectName: "Poller Cronjob",
                companyName: "MAVENTECH LABS PRIVATE LIMITED",
                projectDetails: [
                    {
                        primary:
                            "Php script running as cronjob to handle Incomplete orders in website",
                        secondary:
                            "this project runs at definite intervals in website, checks for incomplete orders in database, process the incomplete order to mark them success, fail,waiting or rejected",
                    },
                    {
                        primary:
                            "This script confirms the payment status with respective payment gateway which are integrated in system,then by using response from payment gateway if mark the the order status. in case of success payment status script tries to complete sale on user's hehalf and inform user about the sale via sms and email",
                        secondary: null,
                    },
                    {
                        primary:
                            "Codeigniter,Cronjob,payment gateway integration, linux mail integration,sms api integration",
                        secondary: null,
                    },
                ],
            },
            {
                projectName: "THEME DEVELOPMENT FOR WEBSITES",
                companyName: "MAVENTECH LABS PRIVATE LIMITED",
                projectDetails: [
                    {
                        primary:
                            "Added more theme into a website builder project.",
                        secondary:
                            "this website builder can generate a full fledged bus ticket booking website using pre defined themes and bus operator data, Added three themes into the project",
                    },
                    {
                        primary:
                            "Tech stack: PHP, CodeIgniter, React,jQuery,Ajax, HTML, CSS, SEO",
                        secondary: null,
                    },
                ],
            },
        ],
    },

];
const Experience = ({ exp }) => {
    console.log(exp);
    const classes = useStyles();
    return (
        <>
            <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
                {exp.year}
            </Typography>
            {exp.projects.map((project) => (
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        {project.projectName}
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        className={classes.body1}
                    >
                        {project.companyName}
                    </Typography>
                    <List dense={true}>
                        {project.projectDetails.map((details) => (
                            <ListItem>
                                <ListItemText
                                    align="center"
                                    className={classes.subtitle1}
                                    primary={details.primary}
                                    secondary={
                                        <Typography
                                            variant="subtitle2"
                                            className={classes.secondaryText}
                                        >
                                            {details?.secondary || null}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            ))}
        </>
    );
};
const Resume = () => {
    const classes = useStyles();
    return (
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Working Experience
            </Typography>
            <Box component="div" className={classes.timeLine}>
                {experiences.map((experience) => (
                    <Experience exp={experience} />
                ))}
            </Box>
        </Box>
    );
};

export default Resume;
