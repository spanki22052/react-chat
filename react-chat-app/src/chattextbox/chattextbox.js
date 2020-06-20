import React, { Component } from "react";
import { WithStyles, TextField, withStyles } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import styles from "./styles";

class ChatTextBoxComponent extends Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.ChatTextBoxContainer}>Hello from Chat Box class</div>;
  }
}

export default withStyles(styles)(ChatTextBoxComponent);
