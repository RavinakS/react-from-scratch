import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }

  render() {
    return this.state.isLoggedin && <div>Welcome Ravina</div>;

    // return this.state.isLoggedin ? (
    //   <div>Welcome Ravina</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // let message;
    // if (this.state.isLoggedin) {
    //   message = <div>Welcome Ravina</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    // if (this.state.isLoggedin) {
    //   return <div>Welcome Ravina</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
