import React, { Component } from "react";
import { WithStyles, TextField, withStyles } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import styles from "./styles";

class ChatTextBoxComponent extends Component {
  constructor() {
    super();
    this.state = {
      chatText: "",
    };
  }

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
        <Send onClick={this.submitMessage} className={classes.sendBtn}></Send>
      </div>
    );
  }

  userTyping = (e) => {
    e.keyCode === 13
      ? this.submitMessage()
      : this.setState({ chatText: e.target.value });
  };
  messageValid = (txt) => txt && txt.replace(/\s/g, "").length;
  submitMessage = () => {
    if (this.messageValid(this.state.chatText)) {
        this.props.submitMessageFn(this.state.chatText)
      document.getElementById("chattextbox").value = "";
    }
  };

  userClickedInput = () => console.log("Clicked input");
}

export default withStyles(styles)(ChatTextBoxComponent);
