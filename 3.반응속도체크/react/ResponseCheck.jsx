import React, { useState, useRef } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해주세요");
  const [result, setResult] = useState([]);
  const id = useRef(null);
  const startTime = useRef(null);
  const endTime = useRef(null);

  const onClick = (e) => {
    const target = e.target;

    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭 해주세요");

      id.current = setTimeout(() => {
        startTime.current = new Date();
        setState("now");
        setMessage("클릭해주세요");
      }, Math.floor(Math.random() * 2000 + 1000));
    } else if (state === "ready") {
      clearTimeout(id.current);
      setState("waiting");
      setMessage("클릭 해주세요");
    } else if (state === "now") {
      clearTimeout(id.current);
      setState("waiting");
      setMessage("클릭해주세요");
      setResult((prevResult) => {
        endTime.current = new Date();
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  const onAverage = () => {
    return result.length === 0
      ? null
      : `평균시간: ${result.reduce((a, c) => a + c) / result.length}MS`;
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClick}>
        {message}
      </div>
      <div id="result">{onAverage()}</div>
    </>
  );
};

export default ResponseCheck;
