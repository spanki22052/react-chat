import React, { Component } from "react";
import { WithStyles, TextField, withStyles } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import styles from "./styles";

class ChatTextBoxComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.chatTextBoxContainer}>
        <TextField
          placeholder="Type your message..."
          id="chattextbox"
          className={classes.chatTextBox}
          onFocus={this.userClickedInput}
          onKeyUp={(e) => this.userTyping(e)}
        ></TextField>
      </div>
    );
  }

  userTyping(e) {
    console.log(`User typing ${e.target.value}`);
  }

  userClickedInput = () => console.log("Clicked input")
}

export default withStyles(styles)(ChatTextBoxComponent);
