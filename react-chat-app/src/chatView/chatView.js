import React, { Component } from "react";

import { withStyles } from "@material-ui/core";
import styles from "./styles";

class ChatViewComponent extends Component {
  componentDidMount = () => {
    const container = document.getElementById("chatview-container");

    if (container) {
      container.scrollTo(0, container.scrollHeight);
    }
  };

  render() {
    const { classes, chat, user } = this.props;

    if (chat === undefined) {
      return <main className={classes.content}></main>;
    } else {
      return (
        <div>
          <div className={classes.chatHeader}>
            Your conversation with{" "}
            {chat.users.filter((_usr) => _usr !== user)[0].split("@")[0]}
          </div>
          <main id="chatview-container" className={classes.content}>
            {chat.messages.map((_msg, _index) => {
              return (
                <div
                  key={_index}
                  className={
                    _msg.sender === user ? classes.userSent : classes.friendSent
                  }
                >
                  {_msg.message}
                </div>
              );
            })}
          </main>
        </div>
      );
    }
  }
}

export default withStyles(styles)(ChatViewComponent);
