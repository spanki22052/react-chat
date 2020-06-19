import React, { Component } from "react";
import {
  withStyles,
  List,
  ListItem,
  Typography,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Button,
  ListItemIcon,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import styles from "./styles";

class ChatListComponent extends Component {
  render() {
    const { classes } = this.props;

    if (this.props.chats.length > 0) {
      return (
        <main className={classes.root}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            className={classes.newChatBtn}
            onClick={this.newChat}
          >
            NEW MESSAGE
          </Button>
          <List>
            {this.props.chats.map((_chat, _index) => {
              return (
                <div key={_index} style={_index === this.props.selectedChatIndex ? {backgroundColor: "#f2f2f2"} : null}>
                  <ListItem
                    onClick={() => this.selectChat(_index)}
                    className={classes.listItem}
                    selected={this.props.selectChatFn === _index}
                    alignItems="flex-start"
                  >
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp">
                        {
                          _chat.users
                            .filter(
                              (_user) => _user !== this.props.userEmail
                            )[0]
                            .split("")[0]
                        }
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        _chat.users
                          .filter((_user) => _user !== this.props.userEmail)[0]
                          .split("@")[0]
                      }
                      secondary={
                        <React.Fragment>
                          <Typography component="span" color="textPrimary">
                            {_chat.messages[
                              _chat.messages.length - 1
                            ].message.substring(0, 30)}
                          </Typography>
                        </React.Fragment>
                      }
                    ></ListItemText>
                  </ListItem>
                  <Divider></Divider>
                </div>
              );
            })}
          </List>
        </main>
      );
    } else {
      return (
        <main className={classes.root}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={this.newChat}
            className={classes.newChatBtn}
          >
            New message
          </Button>
          <List></List>
        </main>
      );
    }
  }
  newChat = () => {
    console.log(" new chat click");
  };

  selectChat = (index) => {
    this.props.selectChatFn(index);
    console.log('Selected chat ', index)
  };
}

export default withStyles(styles)(ChatListComponent);
