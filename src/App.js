import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import PercentBar from "./PercentBar";

const MAX_CORRECT = 151;

export default function App() {
  const [maxScore, setMaxScore] = useState(MAX_CORRECT);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(prevScore => Math.max(0, Math.min(prevScore, maxScore)));
  }, [maxScore]);

  const fetchData = correct => {
    correct && setScore(score => score + 1);
  };

  const randomTrueFalse = () => Math.random() >= 0.333;

  const scoreLabel = `${score}/${maxScore}`;
  const percentCorrect = (score * 100) / maxScore;
  const percentCorrectLabel = `${Number(percentCorrect).toFixed(2)}%`;

  return (
    <div className="App">
      <h1>ProgressBar Demo</h1>

      <label>
        Set maximum score
        <input
          defaultValue={MAX_CORRECT}
          type="number"
          onChange={e => setMaxScore(Number(e.target.value))}
        />
        <button type="button" onClick={() => setScore(0)}>
          Reset
        </button>
      </label>

      <div>Correct #/{maxScore} of Total</div>
      <ProgressBar
        animated
        min={0}
        max={maxScore}
        now={score}
        label={scoreLabel}
      />

      <div>Correct % of {maxScore} Total</div>
      <ProgressBar
        animated
        min={0}
        max={100}
        now={percentCorrect}
        label={percentCorrectLabel}
      />

      <div>Correct #/{maxScore}(%) of Total</div>
      <ProgressBar
        animated
        min={0}
        max={maxScore}
        now={score}
        label={`${scoreLabel} (${percentCorrectLabel})`}
      />

      <div>PercentBar Component</div>
      <PercentBar label={percentCorrectLabel} percent={percentCorrect} />

      <button type="button" onClick={() => fetchData(randomTrueFalse())}>
        Correct or Not?
      </button>
    </div>
  );
}
