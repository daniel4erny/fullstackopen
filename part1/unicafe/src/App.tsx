import { useState } from "react";
import Stats from "./statistics";
import Rating_button from "./rating_button";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <Rating_button
        rate={() => setGood(good + 1)}
        word="neutral"
      ></Rating_button>
      <Rating_button
        rate={() => setNeutral(neutral + 1)}
        word="good"
      ></Rating_button>
      <Rating_button rate={() => setBad(bad + 1)} word="bad"></Rating_button>

      <Stats good={good} neutral={neutral} bad={bad}></Stats>
    </>
  );
}

export default App;
