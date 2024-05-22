import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MySentence from "./MySentence";

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // const arr = []
  // for (let i = 1; i <= 10; i++) {
  //   arr.push(i);
  // }

  const reverseArr = () => {
    const _arr = [...arr];
    const reversed = _arr.reverse();
    setArr(reversed);
  };

  // const osoba = {
  //   name: "Jakub",
  //   age: 17,
  // };

  // destructuring objekta
  // const { name } = osoba;
  // console.log(name);
  // CEMU JE JEDNAKO name?
  // name === osoba.name

  // const osobaNiz = ["Kanita", 19];
  // destructuring niza
  // const [ime] = osobaNiz;
  // console.log(ime);

  // const a = 5
  // a++ === a = a + 1
  // a+1
  // setCount((prevValue) => prevValue++) NIJE KOREKTNO
  // setCount((prevValue) => prevValue + 3)
  return (
    // <React.Fragment>
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((prevValue) => prevValue - 1)}>
          decrease count {count}
        </button>
        <button onClick={() => setCount((prevValue) => prevValue + 1)}>
          increase count {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={reverseArr}>Change order</button>
      {/* Ipravno i sa callback */}
      {/* <button onClick={() => reverseArr()}>Change order</button> */}
      {/* <MySentence />
      <MySentence />
      <MySentence />
      <MySentence />
      <MySentence />
      <MySentence />
      <MySentence />
      <MySentence />
      <MySentence />
      <MySentence /> */}
      {arr.map((num, index) => (
        <div
          key={index}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <p>{num}. </p>
          <MySentence number={num} />
        </div>
      ))}
    </>
    // </React.Fragment>
  );
}

export default App;