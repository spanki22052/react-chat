import React, { Component } from "react";
import ChatListComponent from "../chatList/chatList";

class DashboardComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello world from dashboard</h1>
        <ChatListComponent />
      </div>
    );
  }
}

export default DashboardComponent;
