import React, { Component } from "react";

class Try extends Component {
  render() {
    const { tryInfo } = this.props;

    return (
      <div>
        <span>{tryInfo.try}</span>
        <span>{tryInfo.result}</span>
      </div>
    );
  }
}

export default Try;
