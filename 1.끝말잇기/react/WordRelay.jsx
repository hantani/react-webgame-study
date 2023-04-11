const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("제로초");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue("");
      setResult("정답");
    } else {
      setValue("");
      setResult("땡");
    }

    inputEl.current.focus();
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputEl} value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
