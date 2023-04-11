const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "제로초",
    value: "",
    result: "",
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        word: this.state.value,
        value: "",
        result: "정답",
      });
    } else {
      this.setState({
        value: "",
        result: "땡",
      });
    }

    this.input.focus();
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  input;

  onRef = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            ref={this.onRef}
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
