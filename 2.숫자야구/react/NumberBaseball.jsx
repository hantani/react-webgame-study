import React, { useState, useRef } from "react";
import Try from "./Try";

const getNumbers = () => {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const answer = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    answer.push(chosen);
  }
  console.log(answer);
  return answer;
};

const NumberBaseball = () => {
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers);
  const [result, setResult] = useState("");
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    inputEl.current.focus();

    // 정답일 때
    if (value === answer.join("")) {
      setValue("");
      setAnswer(getNumbers());
      setResult("홈런!");
      setTries([]);
    } else {
      if (tries.length >= 9) {
        setValue("");
        setResult("실패!");
        setTries([]);
      } else {
        let strike = 0;
        let ball = 0;
        const answerArr = value.split("").map((v) => parseInt(v));

        for (let i = 0; i < 4; i += 1) {
          if (answer[i] === answerArr[i]) {
            strike += 1;
          } else if (answer.includes(answerArr[i])) {
            ball += 1;
          }
        }
        setValue("");
        setResult("오답");
        setTries((prevTries) => {
          return [
            ...prevTries,
            {
              try: value,
              result: `${strike} 스트라이크 ${ball} 볼`,
            },
          ];
        });
      }
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{result}</div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputEl}
          minLength={4}
          maxLength={4}
          value={value}
          onChange={onChange}
        />
        <button>입력</button>
      </form>
      {tries.map((v, i) => (
        <Try key={`${i + 1}차 시도`} tryInfo={v} />
      ))}
    </>
  );
};

export default NumberBaseball;
