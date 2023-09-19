import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation using regular expression
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(email)) {
      // Email is not valid, set isValidEmail to false
      setIsValidEmail(false);
      return;
    }

    // Email is valid, proceed with form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 100);

    e.target.submit();
  };

  return (
      <Box component="div" className={classes.contactContainer}>
          <Grid container justify="center">
              <Box component="div" className={classes.form}>
                  {submitted ? (
                      <Typography variant="h5" className={classes.heading}>
                          Thank you for contacting us. We appreciate your
                          message. Will respond to you shortly.
                      </Typography>
                  ) : (
                      <>
                          <Typography variant="h5" className={classes.heading}>
                              Hire or Contact me...
                          </Typography>
                          <form
                              name="gform"
                              id="gform"
                              encType="text/plain"
                              action="https://docs.google.com/forms/d/e/1FAIpQLSdccSqMXAXxnj42hGvptQcXqlVDzlg-mhbx-sQSwcZY1a_uHQ/formResponse?"
                              target="hidden_iframe"
                              onSubmit={handleSubmit}
                          >
                              <InputField
                                  fullWidth={true}
                                  label="Name"
                                  variant="outlined"
                                  inputProps={{ className: classes.input }}
                                  id="entry.1046544382"
                                  name="entry.1046544382"
                              />
                              <InputField
                                  fullWidth={true}
                                  label="Email"
                                  variant="outlined"
                                  inputProps={{ className: classes.input }}
                                  className={classes.field}
                                  name="entry.1295732131"
                                  id="entry.1295732131"
                                  value={email}
                                  onChange={(e) => {
                                      setEmail(e.target.value);
                                      setIsValidEmail(true); // Reset email validation when the user changes the email
                                  }}
                                  error={!isValidEmail} // Set error prop to true when there is an email validation error
                                  helperText={
                                      !isValidEmail &&
                                      "Please enter a valid email address"
                                  }
                              />
                              
                              <InputField
                                  fullWidth={true}
                                  label="Message"
                                  variant="outlined"
                                  multiline
                                  rows={4}
                                  inputProps={{ className: classes.input }}
                                  name="entry.406348487"
                                  id="entry.406348487"
                              />
                              <Button
                                  variant="outlined"
                                  fullWidth={true}
                                  type="submit"
                                  endIcon={<Send />}
                                  className={classes.button}
                              >
                                  Contact Me
                              </Button>
                          </form>
                          <iframe
                              name="hidden_iframe"
                              id="hidden_iframe"
                              style={{ display: "none" }}
                              onLoad={() => {}}
                          ></iframe>
                      </>
                  )}
              </Box>
          </Grid>
      </Box>
  );
};

export default Contact;
