import React, { Component } from "react";
import ChatListComponent from "../chatList/chatList";
import { useRadioGroup } from "@material-ui/core";
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
      </div>
    );
  }

  selectChat = (chatIndex) => {
    console.log("Selected chat " + chatIndex);
  };

  newChatBtnClicked = () =>
    this.setState({ newChatFormVisible: true, selectedChat: null });

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async (_usr) => {
      if (!_usr) {
        this.props.history.push("/login");
      } else {
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", _usr.email)
          .onSnapshot(async (res) => {
            const chats = res.docs.map((_doc) => _doc.data);
            await this.setState({
              email: _usr.email,
              chats: chats,
            });
            console.log(this.state);
          });
      }
    });
  };
}

export default DashboardComponent;
