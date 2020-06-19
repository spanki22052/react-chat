import React, { Component } from "react";
import ChatListComponent from "../chatList/chatList";
import { Button, withStyles } from "@material-ui/core";
import styles from './styles';

const firebase = require("firebase");

class DashboardComponent extends Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: [],
    };
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <h1>Hello world from dashboard</h1>
        <ChatListComponent
          history={this.props.history}
          newChatBtnClicked={this.newChatBtnClicked}
          selectChat={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          selectedChatIndex={this.state.selectedChat}
        />
        <Button className={classes.signOutBtn} onClick={this.signOut}> Sign Out</Button>
      </div>
    );
  }

  selectChat = (chatIndex) => {
    console.log("Selected chat " + chatIndex);
  };

  signOut = () => firebase.auth().signOut()

  newChatBtnClicked = () =>
    this.setState({ newChatFormVisible: true, selectedChat: null });

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async _usr => {
      if (!_usr) this.props.history.push("/login");
      else {
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", _usr.email)
          .onSnapshot(async res => {
            const chats = res.docs.map((_doc) => _doc.data());
            await this.setState({
              email: _usr.email,  
              chats: chats,
            });
            console.log(chats);
          });
      }
    });
  };
}

export default withStyles(styles)(DashboardComponent);
