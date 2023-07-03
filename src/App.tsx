import { useState } from "react";
import "./styles.css";

export default function App() {
  const [score, setScore] = useState<number>(500);

  const onclickcard = (event: React.ChangeEvent<HTMLInputElement>) => {
    const min = 1,
      max = 4;
    const answer = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(event.target.value, "--------", answer);
    if (String(answer) === event.target.value) setScore(score - 100);
    else setScore(score + 100);

    if (score >= 1000) {
      alert("You won");
      setScore(500);
    }
    if (score <= 0) {
      alert("You loose");
      setScore(500);
    }
  };
  return (
    <div className="App">
      <h2>Game of Fortune</h2>
      <p>Either -100 or +100 in score</p>
      <div className="container">
        <button className="card" onClick={onclickcard} value={1}></button>
        <button className="card" onClick={onclickcard} value={2}></button>
        <button className="card" onClick={onclickcard} value={3}></button>
        <button className="card" onClick={onclickcard} value={4}></button>
      </div>
      <h2>Score</h2>
      <div className="score" id="score">
        {score}
      </div>
      <button
        className="reset"
        onClick={() => {
          setScore(500);
        }}
      >
        RESET
      </button>
    </div>
  );
}
