import React, { Component } from "react";

import { withStyles } from "@material-ui/core";
import styles from "./styles";

class ChatViewComponent extends Component {
  render() {
    const { classes, chat, user } = this.props;

    if (chat === undefined) {
      return <main className={classes.content}></main>;
    } else {
      return (
        <div>
          <div></div>
          <main className={classes.content}>
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

    return (
      <div className={classes.content}>Hello from chat view component</div>
    );
  }
}

export default withStyles(styles)(ChatViewComponent);
