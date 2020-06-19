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
    return <div>Hello from chatList</div>;
  }
}

export default withStyles(styles)(ChatListComponent);
