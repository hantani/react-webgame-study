import React, { Component, createRef } from "react";
import Try from "./TryClass";

const getNumbers = () => {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const answer = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    answer.push(chosen);
  }
  return answer;
};

class NumberBaseballClass extends Component {
  state = {
    value: "",
    answer: getNumbers(),
    result: "",
    tries: [],
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.inputRef.current.focus();
    const { value, answer, tries } = this.state;

    // 정답일 때
    if (value === answer.join("")) {
      this.setState((prevState) => {
        return {
          value: "",
          answer: getNumbers(),
          result: `홈런!`,
          tries: [],
        };
      });
    } else {
      if (tries.length >= 9) {
        this.setState((prevState) => {
          return {
            value: "",
            result: `실패!`,
            tries: [],
          };
        });
      } else {
        let strike = 0;
        let ball = 0;
        const answerArr = value.split("").map((v) => parseInt(v));
        console.log(answerArr);

        for (let i = 0; i < 4; i += 1) {
          if (answer[i] === answerArr[i]) {
            strike += 1;
          } else if (answer.includes(answerArr[i])) {
            ball += 1;
          }
        }

        this.setState((prevState) => {
          return {
            value: "",
            result: "오답",
            tries: [
              ...prevState.tries,
              {
                try: value,
                result: `${strike} 스트라이크 ${ball} 볼`,
              },
            ],
          };
        });
      }
    }
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  inputRef = createRef();

  render() {
    console.log(this.state.answer);
    const { result, value, tries } = this.state;
    return (
      <>
        <div>{result}</div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            ref={this.inputRef}
            minLength={4}
            maxLength={4}
            value={value}
            onChange={this.onChange}
          />
          <button>입력</button>
        </form>
        {tries.map((v, i) => (
          <Try key={`${i + 1}차 시도`} tryInfo={v} />
        ))}
      </>
    );
  }
}

export default NumberBaseballClass;
