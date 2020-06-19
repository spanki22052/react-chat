import React, { Component } from "react";
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
import { Link } from "react-router-dom";
import styles from "./styles";
const firebase = require("firebase");

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      password: null,
      email: null,
      loginError: "",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline></CssBaseline>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Log in!
          </Typography>
          <form className={classes.form} onSubmit={(e) => this.submitLogin(e)}>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="login-email-input">
                Enter Your Email
              </InputLabel>
              <Input
                autoComplete="email"
                autoFocus
                id="logine-email-input"
                onChange={(e) => this.userTyping("email", e)}
              ></Input>
            </FormControl>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="login-password-input">
                Enter Your Password
              </InputLabel>
              <Input
                autoComplete="email"
                autoFocus
                type="password"
                id="logine-password-input"
                onChange={(e) => this.userTyping("password", e)}
              ></Input>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {" "}
              Submit{" "}
            </Button>
          </form>
          {this.state.loginError ? (
            <Typography
              component="h5"
              variant="h6"
              className={classes.errorText}
            >
              {" "}
              Incorrect Login Information
            </Typography>
          ) : null}
          <Typography
            component="h5"
            variant="h6"
            className={classes.noAccountHeader}
          >
            Don't have account yet?
          </Typography>
          <Link to="/signup" className={classes.signUpLink}>
            Signup
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
      default:
        break;
    }
  };

  submitLogin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      )
      .then(
        () => {
          this.props.history.push('/dashboard')
        },
        (err) => {
          this.setState({ loginError: "Server error" });
          console.log(err)
        }
      );
  };
}

export default withStyles(styles)(LoginComponent);
