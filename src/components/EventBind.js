import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };

    // step 3 to bind event handler
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // step 1 to bind event handler
  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye!",
  //     });
  //     console.log(this);
  //   }

  //   step 4 to bind event handler
  clickHandler = () => {
    this.setState({ message: "Goodbye!" });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* step 1 to bind event handler */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* step 2 to bind event handler */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* step 3 to bind event handler */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
