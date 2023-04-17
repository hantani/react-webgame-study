import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "클릭 해주세요",
    result: [],
  };

  id;
  startTime;
  endTime;

  onClick = (e) => {
    const target = e.target;
    console.log(target);

    if (target.className === "waiting") {
      this.setState({
        state: "ready",
        message: "초록색이 되면 클릭 해주세요",
      });

      this.id = setTimeout(() => {
        this.startTime = new Date();
        this.setState({
          state: "now",
          message: "클릭해주세요",
        });
      }, Math.floor(Math.random() * 2000 + 1000));
    } else if (target.className === "ready") {
      clearTimeout(this.id);
      this.setState({
        state: "waiting",
        message: "클릭 해주세요",
      });
    } else if (target.className === "now") {
      clearTimeout(this.id);
      this.setState((prevState) => {
        this.endTime = new Date();
        return {
          state: "waiting",
          message: "클릭해주세요",
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
    }
  };

  onAverage = () => {
    const { result } = this.state;

    return result.length === 0
      ? null
      : `평균시간: ${result.reduce((a, c) => a + c) / result.length}MS`;
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClick}>
          {message}
        </div>
        <div id="result">{this.onAverage()}</div>
      </>
    );
  }
}

export default ResponseCheck;
