import React, { Component } from "react";
import WithCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Click {count} times</button>
      </div>
    );
  }
}

export default WithCounter(ClickCounter);
