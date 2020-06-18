import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Input,
  Paper,
  withStyles,
  CssBaseline,
  Typography,
  Button,
} from "@material-ui/core";
import styles from "./styles";
const firebase = require("firebase");

class SignupComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      passwordConfirmation: null,
      signupError: "",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline></CssBaseline>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up!
          </Typography>
          <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-email-input">
                Enter your email
              </InputLabel>
              <Input
                autoComplete="email"
                autoFocus
                onChange={(e) => this.userTyping("email", e)}
                id="signup-email-input"
              ></Input>
            </FormControl>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-password-input">
                Create a Password
              </InputLabel>
              <Input
                type="password"
                onChange={(e) => this.userTyping("password", e)}
                id="signup-user-password"
              ></Input>
            </FormControl>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-password-confirmation-input">
                Confirm your password
              </InputLabel>
              <Input
                type="password"
                onChange={(e) => this.userTyping("passwordConfirmation", e)}
                id="signup-user-password"
              ></Input>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>

          {this.state.signupError ? (
            <Typography
              className={classes.errorText}
              component="h5"
              variant="h6"
            >
              {this.state.signupError}
            </Typography>
          ) : null}

          <Typography
            component="h5"
            variant="h6"
            className={classes.hasAccountHeader}
          >
            Already have an account?
          </Typography>
          <Link to="/login" className={classes.logInLink}>
            Log In
          </Link>
        </Paper>
      </main>
    );
  }

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      case "passwordConfirmation":
        this.setState({ passwordConfirmation: e.target.value });
        break;
      default:
        break;
    }
  };

  formIsValid = () => this.state.password === this.state.passwordConfirmation;

  submitSignup = (e) => {
    e.preventDefault();
    console.log("SUBMITTING! ", this.state);
    console.log(this.formIsValid);
    if (this.formIsValid() === false) {
      this.setState({ signupError: "Passwords aren't same" });
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        (autRes) => {
          const userObj = {
            email: autRes.user.email,
            password: this.state.password
          };

          firebase
            .firestore()
            .collection("users")
            .doc(this.state.email)
            .set(userObj)
            .then(
              () => {
                this.props.history.push("/dashboard");
              },
              (dbError) => {
                console.log(dbError);
                this.setState({ signupError: "Failed to load user" });
              }
            );
        },
        (authErr) => {
          console.log(authErr);
          this.setState({ signupError: "Failed to add user" });
        }
      );
  };
}

export default withStyles(styles)(SignupComponent);
