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

    return (
      <main className={classes.root}>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          className={classes.newChatBtn}
          onClick={this.newChat}
        ></Button>
        <List>
          {this.props.chats.map((_chat, _index) => {
            return (
              <div key={_index}>
                <ListItem
                  onClick={() => this.selectChat(_index)}
                  className={classes.listItem}
                  selected={this.props.selectedChatIndex === _index}
                  alignItems="flex-start"
                >
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp">
                      {
                        _chat.users
                          .filter((_user) => _user !== this.props.userEmail)[0]
                          .split("")[0]
                      }
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      _chat.users
                        .filter((_user) => _user !== this.props.userEmail)[0]
                        .split("")[0]
                    }
                    secondary={
                      <React.Fragment>
                        <Typography component="span" color="textPrimary">
                          {" "}
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
  }

  newChat = () => {
    console.log(" new chat click");
  };

  selectChat = (index) => {
    console.log("Selected chat ", index);
  };
}

export default withStyles(styles)(ChatListComponent);
